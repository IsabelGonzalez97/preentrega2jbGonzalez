// Definimos una función para capturar el nombre y el precio de un producto
function capturarProducto() {
    var nombre = prompt("Ingrese el nombre del producto:");
    var precio = parseFloat(prompt("Ingrese el precio del producto:"));
    return { nombre: nombre, precio: precio };
}

// Definimos una función para calcular el total de la compra
function calcularTotal(productos) {
    var total = 0;
    for (var i = 0; i < productos.length; i++) {
        total += productos[i].precio;
    }
    return total;
}

// Definimos una función para mostrar un resumen de la compra
function mostrarResumen(productos, total) {
    var resumen = "Resumen de la compra:\n";
    for (var i = 0; i < productos.length; i++) {
        resumen += productos[i].nombre + ": $" + productos[i].precio.toFixed(2) + "\n";
    }
    resumen += "Total a pagar: $" + total.toFixed(2);
    alert(resumen);
}

// Creamos un array para almacenar los productos
var productos = [];

// Capturamos los productos hasta que el usuario decida terminar
var continuar = true;
while (continuar) {
    var producto = capturarProducto();
    productos.push(producto);
    continuar = confirm("¿Desea agregar otro producto?");
}

// Calculamos el total de la compra
var totalCompra = calcularTotal(productos);

// Mostramos un resumen de la compra
mostrarResumen(productos, totalCompra);

