"use strict"
var num1=12.3672;
var num1fixed = num1.toFixed(2);
console.log(num1fixed);
//Numero fijo de decimales sin redondear
var num2 = 21.3214;
var num2Str = num2.toString();
var cantDigitos = 0;
for(let i=0; i <num2Str.length; i++){
    if(num2Str[i]=== "."){
        var cantDigitos= i;
    }
}
num2Str = num2Str.slice(0, (cantDigitos + 3));
console.log(num2Str);
