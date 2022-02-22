"use strict"
//Variable global
var theSum = 0;
addNumber();
function addNumber (){
    theSum= 2 +2;
}
console.log(theSum);
//Variable local
var edad= 0;
asignarEdad();
function asignarEdad(){
    edad = 5 + 3;
}
console.log(edad);