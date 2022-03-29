let inicio = 0;
let cantidad = "";
let valorTotal  = 850000;

let formatear = new Intl.NumberFormat('es-Es');

function aumentar(){
    if( inicio <= 9) {
        cantidad = document.getElementById('cantidad').value = ++inicio;
        document.getElementById("total").innerHTML = cantidad;
    }
    calcularTotal();
}
 
function disminuir() {
    if(inicio >= 1) {
        cantidad = document.getElementById('cantidad').value = --inicio;
        document.getElementById("total").innerHTML = cantidad;
        document.getElementById("multiplicar").innerHTML = formatear.format(parseInt(cantidad * valorTotal));
    }
}
function calcularTotal() {
    let valorUnidad = document.getElementById("valorUnitario").innerHTML;
    let cantidadElementos = document.getElementById("total").innerHTML;
    let valorCompra = valorUnidad * cantidadElementos;
    document.getElementById("multiplicar").innerHTML = valorCompra;
}
