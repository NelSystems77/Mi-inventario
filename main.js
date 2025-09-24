import { searchProducts, registerCount, getPreliminaryReport, resetAllCounts } from './inventory.js';

// --- Elementos del DOM ---
const welcomeScreen = document.getElementById('welcome-screen');
const inventoryScreen = document.getElementById('inventory-screen');
const reportConfirmationScreen = document.getElementById('report-confirmation-screen');

const startBtn = document.getElementById('start-inventory-btn');
const generateReportBtn = document.getElementById('generate-report-btn');
const confirmReportBtn = document.getElementById('confirm-report-btn');
const cancelReportBtn = document.getElementById('cancel-report-btn');

const responsibleNameInput = document.getElementById('responsible-name');
const responsibleCodeInput = document.getElementById('responsible-code');
const shiftSelect = document.getElementById('shift-select');
const currentUserInfo = document.getElementById('current-user-info');

const productSearchInput = document.getElementById('product-search');
const searchResultsList = document.getElementById('search-results');
const productActionsDiv = document.getElementById('product-actions');
const selectedProductInfo = document.getElementById('selected-product-info');
const productQuantityInput = document.getElementById('product-quantity');
const confirmQuantityBtn = document.getElementById('confirm-quantity-btn');
const cancelQuantityBtn = document.getElementById('cancel-quantity-btn');

// --- Variables de estado de la aplicación ---
let appState = {
    responsibleName: '',
    responsibleCode: '',
    shift: '',
    selectedProductCode: null,
    selectedProductName: ''
};

// --- Funciones de control de pantalla ---
const showScreen = (screenId) => {
    document.querySelectorAll('.container section').forEach(section => {
        section.classList.remove('active-screen');
        section.classList.add('hidden-screen');
    });
    document.getElementById(screenId).classList.add('active-screen');
    document.getElementById(screenId).classList.remove('hidden-screen');
};

// --- Event Listeners (Control de Eventos) ---

// Botón de inicio del inventario
startBtn.addEventListener('click', () => {
    const name = responsibleNameInput.value.trim();
    const code = responsibleCodeInput.value.trim();
    const shift = shiftSelect.value;

    if (name && code && shift) {
        appState.responsibleName = name;
        appState.responsibleCode = code;
        appState.shift = shift;
        currentUserInfo.textContent = `Responsable: ${name} (${code}) | Turno: ${shift}`;
        showScreen('inventory-screen');
    } else {
        alert('Por favor, complete todos los campos.');
    }
});

// Búsqueda de productos
productSearchInput.addEventListener('input', async (e) => {
    const query = e.target.value;
    const results = await searchProducts(query);
    displaySearchResults(results);
});

// Maneja la selección de un producto en la lista de resultados
searchResultsList.addEventListener('click', (e) => {
    const target = e.target.closest('li');
    if (target) {
        appState.selectedProductCode = target.dataset.codigo;
        appState.selectedProductName = target.dataset.nombre;
        selectedProductInfo.textContent = `Producto: ${appState.selectedProductName}`;
        showProductActions();
    }
});

// Botón para confirmar la cantidad
confirmQuantityBtn.addEventListener('click', async () => {
    const quantity = productQuantityInput.value;
    if (quantity && appState.selectedProductCode) {
        await registerCount(appState.selectedProductCode, appState.shift, quantity);
        alert('Conteo registrado con éxito.');
        resetProductActions();
    } else {
        alert('Por favor, ingrese una cantidad.');
    }
});

// Botón para cancelar la cantidad
cancelQuantityBtn.addEventListener('click', () => {
    resetProductActions();
});

// Botón para generar el reporte
generateReportBtn.addEventListener('click', () => {
    showScreen('report-confirmation-screen');
});

// Botón para confirmar la generación del reporte
confirmReportBtn.addEventListener('click', async () => {
    // Generar el reporte PDF
    const reportData = await getPreliminaryReport(appState.shift);
    generatePDF(reportData);

    // Reiniciar los conteos y la interfaz
    await resetAllCounts();
    resetUI();
    alert('Reporte generado y registros borrados.');
    showScreen('welcome-screen');
});

// Botón para cancelar la generación del reporte
cancelReportBtn.addEventListener('click', () => {
    showScreen('inventory-screen');
});

// --- Funciones auxiliares para la interfaz ---
const displaySearchResults = (results) => {
    searchResultsList.innerHTML = '';
    if (results.length > 0) {
        results.forEach(product => {
            const li = document.createElement('li');
            li.textContent = `${product.nombre} (${product.codigo})`;
            li.dataset.codigo = product.codigo;
            li.dataset.nombre = product.nombre;
            searchResultsList.appendChild(li);
        });
        searchResultsList.style.display = 'block';
    } else {
        searchResultsList.style.display = 'none';
    }
};

const showProductActions = () => {
    productSearchInput.value = '';
    searchResultsList.style.display = 'none';
    productActionsDiv.classList.remove('hidden-screen');
    productQuantityInput.focus();
};

const resetProductActions = () => {
    productActionsDiv.classList.add('hidden-screen');
    productQuantityInput.value = '';
    appState.selectedProductCode = null;
    appState.selectedProductName = '';
    productSearchInput.focus();
};

const resetUI = () => {
    responsibleNameInput.value = '';
    responsibleCodeInput.value = '';
    shiftSelect.value = '';
    resetProductActions();
};

// --- Función para generar el PDF (Módulo de Reportes) ---
const generatePDF = (data) => {
    // Usamos el constructor de window.jsPDF para acceder a la biblioteca
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Título y detalles del reporte
    doc.setFontSize(18);
    doc.text('Reporte de Inventario', 10, 10);
    doc.setFontSize(12);
    doc.text(`Responsable: ${appState.responsibleName} (${appState.responsibleCode})`, 10, 20);
    doc.text(`Turno: ${appState.shift}`, 10, 27);
    doc.text(`Fecha y Hora: ${new Date().toLocaleString()}`, 10, 34);

    // Preparamos los datos en un formato de tabla
    const tableColumn = ["Código", "Nombre del Producto", "Cantidad", "Presentación"];
    const tableRows = data.map(item => [
        item.codigo,
        item.nombre,
        item.cantidad,
        item.presentacion
    ]);

    // Generamos la tabla en el PDF
    doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: 45
    });

    // Guardamos el archivo
    const filename = `Reporte_Inventario_${appState.responsibleName}_${appState.shift}.pdf`;
    doc.save(filename);
};