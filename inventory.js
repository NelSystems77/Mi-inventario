// Importamos las funciones del Módulo Core (db.js)
import { getProducts, saveCount, getCountsByTurn, clearAllCounts } from './db.js';

// --- Funciones para la búsqueda de productos ---
// 
// Esta función implementa una "búsqueda difusa" para una mejor experiencia de usuario.
// Busca coincidencias en el nombre o el código del producto, ignorando mayúsculas y minúsculas.
export const searchProducts = async (query) => {
    // Si la búsqueda está vacía, no devolvemos resultados para evitar mostrar toda la lista.
    if (!query || query.trim() === '') {
        return [];
    }

    try {
        const allProducts = await getProducts();
        const lowerCaseQuery = query.toLowerCase();

        const filteredProducts = allProducts.filter(product => {
            const productName = product.nombre.toLowerCase();
            const productCode = product.codigo.toLowerCase();
            
            // Revisa si el término de búsqueda está incluido en el nombre o en el código.
            return productName.includes(lowerCaseQuery) || productCode.includes(lowerCaseQuery);
        });

        return filteredProducts;
    } catch (error) {
        console.error('Error al buscar productos:', error);
        return [];
    }
};

// --- Funciones para el registro y gestión de conteos ---

// Función para guardar el conteo de un producto
export const registerCount = async (productCode, turn, quantity) => {
    // Definimos la estructura del registro de conteo
    const countData = {
        productCode: productCode,
        cantidad: parseInt(quantity), // Aseguramos que la cantidad sea un número
        turno: turn,
        fecha: new Date().toISOString() // Almacenamos la fecha y hora del conteo
    };

    try {
        await saveCount(countData);
        console.log(`Conteo de producto ${productCode} guardado exitosamente.`);
    } catch (error) {
        console.error('Error al guardar el conteo:', error);
    }
};

// Función para obtener el reporte preliminar del turno actual
// Esto reúne todos los conteos para mostrárselos al usuario antes de generar el PDF.
export const getPreliminaryReport = async (turn) => {
    try {
        // Obtenemos todos los conteos de la base de datos para el turno actual
        const counts = await getCountsByTurn(turn);
        // Obtenemos la lista completa de productos para asociar los conteos
        const allProducts = await getProducts();

        const reportData = counts.map(count => {
            // Busca el producto correspondiente en la lista maestra
            const product = allProducts.find(p => p.codigo === count.productCode);
            return {
                ...product, // Incluimos toda la información del producto
                cantidad: count.cantidad,
                turno: count.turno,
                fecha: count.fecha
            };
        });

        return reportData;
    } catch (error) {
        console.error('Error al obtener el reporte preliminar:', error);
        return [];
    }
};

// Función para reiniciar todos los conteos
// Esta se usará después de generar el reporte PDF.
export const resetAllCounts = async () => {
    try {
        await clearAllCounts();
        console.log('Todos los conteos han sido borrados.');
    } catch (error) {
        console.error('Error al borrar los conteos:', error);
    }
};