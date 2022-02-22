"use stric"
//Todo mayuscula
var frase1 = "Esta es una frase en mayuscula" ;
var frase1may = frase1.toUpperCase();
console.log(frase1);
//Minuscula
var frase2 ="Esta es una frase en minuscula";
var frase2min = frase2.toUpperCase();
console.log(frase2min);
//primera letra en mayuscula
var frase3= "Esta frase tiene la primer letra en mayuscula";
frase3 = frase3.toLowerCase();
frase3 = frase3.slice(0,1) + frase3[1].toUpperCase() + frase3.slice(2);
console.log(frase3);

//Metodo slice
var frase4= "En Saladoblanco todo se vive mejor ";
var municipio="Acevedo";
