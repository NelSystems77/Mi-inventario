// db.js

// Paso 1: Definir la lista de productos
// La estructura es un array de objetos.
const productList = [
    { codigo: 'SI-150', nombre: 'Tranquinal 0.25 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-151', nombre: 'Tranquinal 0.5 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-159', nombre: 'Tafil 0.75 mg / mL Gotas', presentacion: 'Gotas' },
    { codigo: 'SI-160', nombre: 'Xanax 0.75 mg / mL Gotas', presentacion: 'Gotas' },
    { codigo: 'SI-136', nombre: 'Liberad XR 0.5 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-137', nombre: 'Liberad XR 1.0 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-142', nombre: 'Azoblu 0.5 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-001', nombre: 'Alprazolam 0,5 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-002', nombre: 'Alprazolam 1mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-003', nombre: 'Ansiolit 0,5 mg. Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-070', nombre: 'Tafil 0,25 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-071', nombre: 'Tafil 0,5 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-072', nombre: 'Tafil 1 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-091', nombre: 'Alprazolam 0,25 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-092', nombre: 'Alprazolam 2 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-093', nombre: 'Apo-Alpraz 0,25 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-094', nombre: 'Apo-Alpraz 0,50 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-097', nombre: 'Duazolam 0,25 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-098', nombre: 'Duazolam 0,50 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-099', nombre: 'Duazolam 1 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-110', nombre: 'Ansiopax 0,5 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-116', nombre: 'Tafil AP 0,5 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-117', nombre: 'Tafil AP 1 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-118', nombre: 'Tafil AP 2 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-122', nombre: 'Ansiopax AP 1mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-124', nombre: 'Liberad 0.5 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-164', nombre: 'Alprazolam 0.75mg /mL Gotas', presentacion: 'Gotas' },
    { codigo: 'SI-165', nombre: 'Anfepramona 75 mg Capuslas', presentacion: 'Cápsulas' },
    { codigo: 'SI-126', nombre: 'Neobes L. P. Cápsulas', presentacion: 'Cápsulas' },
    { codigo: 'SI-059', nombre: 'Neobes 75 mg Capsulas', presentacion: 'Cápsulas' },
    { codigo: 'SI-050', nombre: 'Lexotan 1.5 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-051', nombre: 'Lexotan 3mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-052', nombre: 'Lexotan 6mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-010', nombre: 'Bromalex 3 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-011', nombre: 'Bromazepam 1.5mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-012', nombre: 'Bromazepam 3mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-013', nombre: 'Bromazepam 6mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-127', nombre: 'Pacifen 1.5 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-128', nombre: 'Pacifen 3mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-129', nombre: 'Pacifen 6mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-166', nombre: 'Bromazepam 1.5 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-014', nombre: 'Clobazam 10 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-085', nombre: 'Urbadan 10 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-155', nombre: 'Obeclox 30 mg Capsulas', presentacion: 'Cápsulas' },
    { codigo: 'SI-167', nombre: 'Clobenzorex 30 mg Capsulas', presentacion: 'Cápsulas' },
    { codigo: 'SI-168', nombre: 'Clonazepam 0.5 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-157', nombre: 'Quiliv 2 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-158', nombre: 'Quiliv 2.5 mg / mL Gotas', presentacion: 'Gotas' },
    { codigo: 'SI-135', nombre: 'Klonopin 2 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-134', nombre: 'Klonopin 0.5 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-095', nombre: 'Clonazepam 0,25 % Gotas', presentacion: 'Gotas' },
    { codigo: 'SI-119', nombre: 'Acepran 0.5 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-120', nombre: 'Acepran 2 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-121', nombre: 'Acepran 2.5 mg/ml Gotas', presentacion: 'Gotas' },
    { codigo: 'SI-111', nombre: 'Clonazepam 2,5 mg / ml Gotas', presentacion: 'Gotas' },
    { codigo: 'SI-114', nombre: 'Rivotril 0,5 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-016', nombre: 'Clonazepam 2mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-062', nombre: 'Rivotril 2,5mg/ml Gotas', presentacion: 'Gotas' },
    { codigo: 'SI-063', nombre: 'Rivotril 2mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-133', nombre: 'Fulcrum 5mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-102', nombre: 'Librax 5 mg Capuslas', presentacion: 'Cápsulas' },
    { codigo: 'SI-020', nombre: 'Diazepam 5 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-021', nombre: 'Diazepam 10 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-056', nombre: 'Medix Diatex 8 mg. Cápsulas', presentacion: 'Cápsulas' },
    { codigo: 'SI-105', nombre: 'Tecepan 10 mg / 2 ml Ampollas', presentacion: 'Ampollas' },
    { codigo: 'SI-107', nombre: 'Trancalmato 5 mg /ml Gotas', presentacion: 'Gotas' },
    { codigo: 'SI-112', nombre: 'Diazepam 5 mg /ml Ampollas', presentacion: 'Ampollas' },
    { codigo: 'SI-096', nombre: 'Diazepam 10 mg / 2 ml Ampollas', presentacion: 'Ampollas' },
    { codigo: 'SI-086', nombre: 'Valium 5 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-087', nombre: 'Valium 10 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-089', nombre: 'Valium 10 mg / 2 ml Ampollas', presentacion: 'Ampollas' },
    { codigo: 'SI-077', nombre: 'Tecepam 5 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-123', nombre: 'Diazepam B.P. 5 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-101', nombre: 'Fenobarbital 50 mg / ml Ampollas', presentacion: 'Ampollas' },
    { codigo: 'SI-037', nombre: 'Fenobarbital 25 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-038', nombre: 'Fenobarbital 100 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'ES-026', nombre: 'Fentanilo 0.05 mg / ml Ampollas', presentacion: 'Ampollas' },
    { codigo: 'ES-024', nombre: 'Fentanilo 100 mcg Parches', presentacion: 'Parches' },
    { codigo: 'ES-023', nombre: 'Fentanilo 50 mcg Parches', presentacion: 'Parches' },
    { codigo: 'ES-014', nombre: 'Fentanilo 0.05 mg / 2 mL Ampollas', presentacion: 'Ampollas' },
    { codigo: 'ES-011', nombre: 'Durogesic 75 mcg Parches', presentacion: 'Parches' },
    { codigo: 'ES-022', nombre: 'Fentanilo 25 mcg Parches', presentacion: 'Parches' },
    { codigo: 'ES-005', nombre: 'Durogesic 25 mcg Parches', presentacion: 'Parches' },
    { codigo: 'ES-006', nombre: 'Durogesic 50 mcg Parches', presentacion: 'Parches' },
    { codigo: 'ES-007', nombre: 'Durogesic 100 mcg Parches', presentacion: 'Parches' },
    { codigo: 'ES-027', nombre: 'Durogesic Parches', presentacion: 'Parches' },
    { codigo: 'ES-028', nombre: 'Durogesic Parches', presentacion: 'Parches' },
    { codigo: 'ES-029', nombre: 'Durogesic Parches', presentacion: 'Parches' },
    { codigo: 'SI-034', nombre: 'Duromine 15 mg Capuslas', presentacion: 'Cápsulas' },
    { codigo: 'SI-035', nombre: 'Duromine 30mg Capsulas', presentacion: 'Cápsulas' },
    { codigo: 'SI-143', nombre: 'Terfamex 15 mg Capsulas', presentacion: 'Cápsulas' },
    { codigo: 'SI-146', nombre: 'Novo Cetonil 30 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-152', nombre: 'Novo Cetonil 15 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-169', nombre: 'Fentermina 15 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-170', nombre: 'Fentermina 30 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-149', nombre: 'Terfamex 30 mg Capuslas', presentacion: 'Cápsulas' },
    { codigo: 'SI-064', nombre: 'Rohypnol 1mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-156', nombre: 'Ketamina 10 mg/mL Solucion', presentacion: 'Solución' },
    { codigo: 'SI-090', nombre: 'Victan 2mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-171', nombre: 'Loflazepato de etilo 2 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-033', nombre: 'Dormonoct 2 mg. Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'SI-006', nombre: 'Ativan 1mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-007', nombre: 'Ativan 2mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-066', nombre: 'Sedazepam 2 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-067', nombre: 'Sinestron 1mg Capsulas', presentacion: 'Cápsulas' },
    { codigo: 'SI-068', nombre: 'Sinestron 2mg Capsulas', presentacion: 'Cápsulas' },
    { codigo: 'SI-054', nombre: 'Lorazepam 1mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-055', nombre: 'Lorazepam 2mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-069', nombre: 'Solucaps 2mg Capsulas', presentacion: 'Cápsulas' },
    { codigo: 'SI-025', nombre: 'Diestet 1 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-130', nombre: 'Solucaps 2mg L. P. Capsulas', presentacion: 'Cápsulas' },
    { codigo: 'SI-154', nombre: 'MZ1 1 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-172', nombre: 'Mazindol 0.5 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-173', nombre: 'Mazindol 1 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'ES-015', nombre: 'Meperidina 50 mg / 2 mL Ampollas', presentacion: 'Ampollas' },
    { codigo: 'ES-016', nombre: 'Metadona 5 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'ES-017', nombre: 'Metadona 10 mg / 2 mL Ampollas', presentacion: 'Ampollas' },
    { codigo: 'ES-001', nombre: 'Concerta 18 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'ES-002', nombre: 'Concerta 27 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'ES-003', nombre: 'Concerta 36 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'ES-004', nombre: 'Concerta 54 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'ES-018', nombre: 'Ritalina Metilfenidato 10 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'ES-030', nombre: 'Metilfenidato 10 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-138', nombre: 'Melex 1 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-174', nombre: 'Mexazolam 1 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-175', nombre: 'Midazolam 7.5 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-176', nombre: 'Midazolam 5 mg / 5 ml Ampollas', presentacion: 'Ampollas' },
    { codigo: 'SI-177', nombre: 'Midazolam 50 mg / 10 ml Ampollas', presentacion: 'Ampollas' },
    { codigo: 'SI-163', nombre: 'Midazolam 15 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-139', nombre: 'Midazolam BP 5 mg / mL Ampollas', presentacion: 'Ampollas' },
    { codigo: 'SI-125', nombre: 'Midazolam 5 mg / ml Ampollas', presentacion: 'Ampollas' },
    { codigo: 'SI-113', nombre: 'Fulsed 15 mg /3 ml Ampollas', presentacion: 'Ampollas' },
    { codigo: 'SI-057', nombre: 'Midazolam 15 mg / 3 ml Ampollas', presentacion: 'Ampollas' },
    { codigo: 'SI-026', nombre: 'Dormicum 7,5 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-027', nombre: 'Dormicum 15 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-028', nombre: 'Dormicum 15 mg / 3 ml Ampollas', presentacion: 'Ampollas' },
    { codigo: 'SI-029', nombre: 'Dormicum 50 mg / 10 ml Ampollas', presentacion: 'Ampollas' },
    { codigo: 'SI-030', nombre: 'Dormicum 5 mg / 5 ml Ampollas', presentacion: 'Ampollas' },
    { codigo: 'SI-031', nombre: 'Dormix 15 ml /3 ml Ampollas', presentacion: 'Ampollas' },
    { codigo: 'SI-032', nombre: 'Dormix 15 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-044', nombre: 'Fulsed 5 mg / ml Ampollas', presentacion: 'Ampollas' },
    { codigo: 'ES-013', nombre: 'Oramorph 20 mg / mL Solucion oral', presentacion: 'Solución oral' },
    { codigo: 'ES-021', nombre: 'Morfina 15 mg / mL Ampollas', presentacion: 'Ampollas' },
    { codigo: 'ES-019', nombre: 'Morfina 20 mg (Accion Rapida) Tabletas', presentacion: 'Tabletas' },
    { codigo: 'ES-020', nombre: 'Morfina 30 mg (Accion Prolongada) Tabletas', presentacion: 'Tabletas' },
    { codigo: 'ES-012', nombre: 'Oramorph 2 mg / mL Solucion oral', presentacion: 'Solución oral' },
    { codigo: 'ES-009', nombre: 'Oxicodona 20 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'ES-010', nombre: 'Oxicodona 40 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'ES-008', nombre: 'Oxicodona 10 mg Comprimidos', presentacion: 'Comprimidos' },
    { codigo: 'ES-025', nombre: 'Sevredol L.R. Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-103', nombre: 'Sodipental 0,5 g Frasco Ámpula', presentacion: 'Frasco Ámpula' },
    { codigo: 'SI-106', nombre: 'Tiopental Sódico 500 mg Frasco Ampolla', presentacion: 'Frasco Ampolla' },
    { codigo: 'SI-115', nombre: 'Sodipental 1 g Frasco Ámpula', presentacion: 'Frasco Ámpula' },
    { codigo: 'SI-047', nombre: 'HalciOn 0.25 mg Tabletas', presentacion: 'Tabletas' },
    { codigo: 'SI-178', nombre: 'Triazolam 0.25 mg Tabletas', presentacion: 'Tabletas' },
];

const DB_NAME = 'InventarioDB';
const DB_VERSION = 1;
const STORE_PRODUCTS = 'productos';
const STORE_CONTEO = 'conteo';

let db;

// Función para abrir la base de datos y crear los "almacenes"
const initDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = event => {
            console.error('IndexedDB error:', event.target.errorCode);
            reject('Error al abrir la base de datos.');
        };

        request.onupgradeneeded = event => {
            db = event.target.result;

            // Crea el almacén de productos si no existe
            if (!db.objectStoreNames.contains(STORE_PRODUCTS)) {
                const productsStore = db.createObjectStore(STORE_PRODUCTS, { keyPath: 'codigo' });
            }

            // Crea el almacén para los registros de conteo
            if (!db.objectStoreNames.contains(STORE_CONTEO)) {
                const conteoStore = db.createObjectStore(STORE_CONTEO, { autoIncrement: true });
                conteoStore.createIndex('turno', 'turno');
            }
        };

        request.onsuccess = event => {
            db = event.target.result;
            console.log('Base de datos abierta con éxito.');

            // Verifica si el almacén de productos está vacío y lo puebla
            populateProductsStore();
            resolve(db);
        };
    });
};

// Función para poblar la base de datos con la lista de productos
const populateProductsStore = () => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_PRODUCTS], 'readwrite');
        const store = transaction.objectStore(STORE_PRODUCTS);

        const countRequest = store.count();
        countRequest.onsuccess = () => {
            if (countRequest.result === 0) {
                productList.forEach(product => {
                    store.add(product);
                });
                console.log('Productos iniciales agregados a la base de datos.');
            }
            resolve();
        };

        countRequest.onerror = reject;
    });
};

// Las funciones que usarás en el resto de tu aplicación

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_PRODUCTS], 'readonly');
        const store = transaction.objectStore(STORE_PRODUCTS);
        const request = store.getAll();

        request.onsuccess = () => {
            resolve(request.result);
        };

        request.onerror = reject;
    });
};

export const saveCount = (conteo) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_CONTEO], 'readwrite');
        const store = transaction.objectStore(STORE_CONTEO);

        const request = store.add(conteo);
        request.onsuccess = () => {
            resolve(request.result);
        };

        request.onerror = reject;
    });
};

export const getCountsByTurn = (turno) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_CONTEO], 'readonly');
        const store = transaction.objectStore(STORE_CONTEO);
        const index = store.index('turno');
        const request = index.getAll(turno);

        request.onsuccess = () => {
            resolve(request.result);
        };

        request.onerror = reject;
    });
};

export const clearAllCounts = () => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction([STORE_CONTEO], 'readwrite');
        const store = transaction.objectStore(STORE_CONTEO);
        const request = store.clear();

        request.onsuccess = () => {
            resolve();
        };

        request.onerror = reject;
    });
};

// Se ejecuta la función de inicialización cuando el script se carga
initDB();