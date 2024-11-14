window.onload = function() {
    // Lista de los lotes disponibles (IDs de los lotes presentes en el HTML)
    const lotesDisponibles = [
        'L1BPS', 'L2BPS', 'L3BPS', 'L7BPS', 'L8BPS', 'L12BPS', 'L14BPS', 'L15BPS', 'L16BPS',
        'L17BPS', 'L18BPS', 'L19BPS', 'L20BPS', 'L21BPS', 'L22BPS', 'L23BPS', 'L24BPS', 'L25BPS',
        'L26BPS', 'L27BPS', 'L28BPS', 'L29BPS', 'L37BPS', 'L38BPS', 'L39BPS', 'L40BPS','L46BPS', 
        'L47BPS', 'L48BPS', 'L49BPS', 'L50BPS', 'L51BPS', 'L52BPS', 'L53BPS', 'L54BPS','L55BPS', 
        'L56BPS', 'L58BPS'
    ];

    // Iterar solo sobre los lotes que están disponibles
    for (let i = 0; i < lotesDisponibles.length; i++) {
        let loteId = lotesDisponibles[i]; // Lote actual
        let anticipoId = 'Ant' + loteId; // Generamos el ID de la celda del anticipo
        let cuotasId = 'Cuotas12' + loteId; // Generamos el ID de la celda de las cuotas (sin 'L')
        calcularAnticipo(loteId, anticipoId);  // Llamamos a la función para cada lote

    }
};

// Función para calcular el anticipo de cualquier lote
function calcularAnticipo(loteId, anticipoId) {
    // Obtener el valor del lote (texto de la celda con id="LoteId")
    let LoteText = document.getElementById(loteId).textContent.trim();

    // Eliminar la palabra 'usd' y los puntos (separador de miles)
    let LoteValue = LoteText.replace('USD', '').replace('.', '').trim(); 

    // Convertir el valor a número
    LoteValue = parseFloat(LoteValue);

    // Calcular el 5% del valor de LoteValue (anticipo)
    let anticipo = LoteValue * 0.05;

    // Mostrar el resultado en la celda con id="AntLoteId"
    document.getElementById(anticipoId).textContent = "USD"+ " " + anticipo.toFixed(2);
}

function calculocuotas (){

}

