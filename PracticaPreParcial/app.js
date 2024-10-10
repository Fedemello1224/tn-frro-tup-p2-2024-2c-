document.getElementById("cantidad").addEventListener("input", function() {
    let cantidad = parseInt(document.getElementById("cantidad").value);

    if (cantidad <= 0) {
        document.getElementById("cantidad").style.backgroundColor = "red";
    } else {
        document.getElementById("cantidad").style.backgroundColor = "white"; // Restaurar color si es válido
    }
});

document.getElementById("calcularBtn").addEventListener("click", function() {
    // Obtener valores de los inputs
    let tipoReactor = document.getElementById("tipoReactor").value;
    let cantidad = parseInt(document.getElementById("cantidad").value);
    let pais = document.getElementById("pais").value;

    // Validar que la cantidad de reactores sea mayor a 0
    if (cantidad <= 0) {
        document.getElementById("cantidad").style.backgroundColor = "red";
        return;  // Detener la ejecución si la cantidad es inválida
    } else {
        document.getElementById("cantidad").style.backgroundColor = "white"; // Restaurar color si es válido
    }

    // Mostrar alerta si la cantidad es mayor a 3
    if (cantidad > 3) {
        alert("Para más de 3 reactores, consultar stock antes de comprar");
    }

    // Definir precios por tipo de reactor
    let precios = {
        PWR: 5000,
        BWR: 5500,
        PHWR: 4500,
        LWGR: 6000
    };
    
    // Calcular el costo total
    let costoTotal = precios[tipoReactor] * cantidad;

    // Crear objeto con los datos del cotizador
    let cotizacion = {
        tipoReactor: tipoReactor,
        cantidad: cantidad,
        pais: pais,
        costoTotal: costoTotal
    };

    // Mostrar el objeto en la consola
    console.log(cotizacion);

    // Mostrar el resultado en el párrafo
    document.getElementById("resultado").textContent = 
        "El costo total para " + cantidad + " reactor(es) tipo " + tipoReactor + 
        " en " + pais + " es: $" + costoTotal + " millones";

    // Cambiar el color del resultado después de realizar la cotización
    document.getElementById("resultado").style.backgroundColor = "lightgreen"; 

    // Cambiar el color a rojo después de 2 segundos
    setInterval(function() {
        let resultado = document.getElementById("resultado");
        resultado.style.backgroundColor = resultado.style.backgroundColor ===  "red"? "lightgreen" : "red";
    }, 2000);
});
