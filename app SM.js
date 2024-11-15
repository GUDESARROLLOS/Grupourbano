
var Dolar = 1120; 

// Lista de lotes y sus valores en USD
const lotesV = [
    { nombre: 'L1SM', valorUSD: 22000 },
    { nombre: 'L2SM', valorUSD: 22000 },
    { nombre: 'L3SM', valorUSD: 22000 },
    { nombre: 'L4SM', valorUSD: 22000 },
    { nombre: 'L5SM', valorUSD: 22000 },
    { nombre: 'L6SM', valorUSD: 20000 },
    { nombre: 'L7SM', valorUSD: 19000 },
    { nombre: 'L8SM', valorUSD: 19000 },
    { nombre: 'L9SM', valorUSD: 23000 },
    { nombre: 'L10SM', valorUSD: 2300 },
    { nombre: 'L13SM', valorUSD: 2300 },
    { nombre: 'L15SM', valorUSD: 2700 },
    { nombre: 'L16SM', valorUSD: 2800 },
    { nombre: 'L34SM', valorUSD: 2500 },
    { nombre: 'L35SM', valorUSD: 2600 },
    { nombre: 'L36SM', valorUSD: 2700 },
    { nombre: 'L39SM', valorUSD: 2300 },
    { nombre: 'L40SM', valorUSD: 2300 },
    { nombre: 'L41SM', valorUSD: 2200 },
    { nombre: 'L42SM', valorUSD: 2100 },
    { nombre: 'L43SM', valorUSD: 2200 },
    { nombre: 'L44SM', valorUSD: 2100 },
];

// Función para convertir los lotes de USD a pesos
function ValorLotesEnPesos(lotes, Dolar) {
    return lotes.map(lote => {
        return {
            nombre: lote.nombre,
            valorUSD: lote.valorUSD,
            valorPesos: lote.valorUSD * Dolar
        };
    });
}

// Función para calcular valores de cualquier lote en pesos
function calcularFpesos(loteId, anticipoId,Cuotas12Id, Cuotas24Id, Cuotas36Id, Cuotas48Id, Cuotas60Id, Cuotas72Id, Cuotas84Id, RefPesosId) {
    // Obtener el lote correspondiente del array de lotes
    const lote = lotesV.find(lote => lote.nombre === loteId);
    
    // Si el lote no existe, no hacer nada
    if (!lote) {
        console.error("Lote no encontrado:", loteId);
        return;
    }
    
    // Obtener el valor en pesos de ese lote
    const valorPesos = lote.valorUSD * Dolar;  
    
    // Mostrar el valor en la celda de referencia (RefPesosId)
    const refPElement = document.getElementById(RefPesosId);
    if (refPElement) {
        refPElement.textContent = valorPesos.toLocaleString();  // Formato con separadores de miles
    } else {
        console.error("Elemento no encontrado para referencia:", RefPesosId);
    }

    // Calcular el anticipo (20% del valor en pesos)
    const anticipoP = valorPesos * 0.20;

    // Mostrar el anticipo en la celda correspondiente (anticipoId)
    const anticipoPElement = document.getElementById(anticipoId);
    if (anticipoPElement) {
        anticipoPElement.textContent = anticipoP.toLocaleString();  // Formato con separadores de miles
    } else {
        console.error("Elemento no encontrado para anticipo:", anticipoId);
    }

 
}

// Llamada inicial para cada lote
window.onload = function() {
    const lotesDisponiblesSM = [
        'L1SM', 'L2SM', 'L3SM', 'L4SM', 'L5SM', 'L6SM', 'L7SM', 'L8SM', 'L9SM',
        'L10SM', 'L13SM', 'L15SM', 'L16SM', 'L34SM', 'L35SM', 'L36SM', 'L39SM', 'L40SM',
        'L41SM', 'L42SM', 'L43SM', 'L44SM'
    ];

    // Iterar sobre los lotes disponibles
    lotesDisponiblesSM.forEach(loteId => {
        const anticipoId = 'Ant' + loteId;
        const Cuotas12Id = 'Cuotas12' + loteId;
        const Cuotas24Id = 'Cuotas24' + loteId;
        const Cuotas36Id = 'Cuotas36' + loteId;
        const Cuotas48Id = 'Cuotas48' + loteId;
        const Cuotas60Id = 'Cuotas60' + loteId;
        const Cuotas72Id = 'Cuotas72' + loteId;
        const Cuotas84Id = 'Cuotas84' + loteId;
        const RefPesosId = 'RefPesos' + loteId;
        
        calcularFpesos(loteId, anticipoId, Cuotas12Id, Cuotas24Id, Cuotas48Id, Cuotas36Id,Cuotas60Id, Cuotas72Id, Cuotas84Id, RefPesosId);  // Llamada a la función
    });
};
