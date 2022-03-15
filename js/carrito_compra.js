"use strict"

function valorIndividual() {
    let valorUnita = new Intl.NumberFormat('es-Es').format(valorunico);
    document.getElementById("precioUnitario").innerHTML.valorUnita;
}
function sumarPedido(){
    let cantidadActual = document.getElementById("valor").innerHTML;
    let cantidadInt = Number(cantidadActual) + 1;
    document.getElementById("valor").innerHTML = cantidadInt;

}

function calcularSubtotal(){
    document.getElementById("precioUnitario").innerHTML;
    let totalUnidades = document.getElementById("valor").innerHTML;
    let vSubtotal = valorunico * Number(totalUnidades);
    let vSubtotalFormta = new Intl.NumberFormat('es-Es').format(vSubtotal)
    document.getElementById("subtotal").innerHTML.vSubtotalFormta;
    alert("totalUnidades"); 

}
/*Validad la cantidad de productos para el texto */
function infoCantidades() {
    let cantidadProducto = document.getElementById("valor").innerHTML;
    let numeroEntero = cantidadProductos;
    document.getElementById("cantidad").innerHTML.numeroEntero;
    validarTextoInfo();

}
/*Validar la cantidad parra definir singular o plural*/
function infoCantidades(){
    /* Obtener el numero de unidades*/ 
    let cantidadProductos = document.getElementById("valor").innerHTML;
    /* Condicional... si cantidad producto == a 1 entonces productos, si o no productos.*/
    if (cantidadProductos == 1){
        document.getElementById("cantidad").innerHTML = cantidadProductos.toString() + "Producto)";

    }else{
        document.getElementById("cantidad").innerHTML= cantidadProductos.toString() + "Producto)";
    } 
}
