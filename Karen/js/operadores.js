"use strict"
//suma , resta , multiplicacion , division , residuo %//
//Calcular el costo de un producto teniendo en cuenta el domicilio y el descuento//
var costoProducto = 23000;
var costoImpuesto= 0;
var impuesto = 10; // 10 por ciento 
var costoProductoConImp = 0;
var costoProductoConDescuento = 0;
var domicilio = 2500; 
var descuento = 20; //20 por ciento del valor final sin el domicilio.
var costoFinal = 0;
//Hallar el valor del producto con el impuesto
 costoImpuesto = (impuesto / 100) * costoProducto;
 costoProductoConImp = costoProducto + costoImpuesto;
 descuento = (descuento /100);
 costoProductoConDescuento = (costoProductoConImp - (costoProductoConImp * descuento));
 costoFinal = costoProductoConDescuento + domicilio;
 console.log("El costo final del producto es: $ " + costoFinal);

