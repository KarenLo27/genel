"use strict"
//Funcion sin parametros y sin retorno.
/*function llamarhora(){
    var now = new Date();
    var hora = now.getHours();
    var minutos = now.getMinutes();
    if(hora < 10){
        hora = "0" + hora;
    }
    if(minutos < 10){
        minutos = "0" + minutos;
    }
    alert("Hora Actual:" + hora + ":" +minutos);
}*/

//Funcion con parametros y sin retorno
/*function saludo(bienvenida){
    alert(bienvenida);
}*/
//Funcion con varios parametros
/*function presentacion(nombre, edad ){
    alert("Nombre:" + nombre + ". Edad:" + edad)
}*/
//Funcion con retorno
function validarDescuento(compra){
    var total = 0;
    if(compra >= 5000) {
        //Si la compra es mayor a 5000 tiene
        //un descuento del 10%
        total = compra * .9;
    }
    else if(compra > 5000 && compra < 9999){
        //descuento del 5%
        total = compra * .95;
    }
    else{
        total = compra;
    }
    return total;
}
//Creamos la funcion dede la cual
//vamos a llamar la funcion con retorno
function calcDescuento(costo){
    alert("costo final:" + validarDescuento(costo));
}
