"use strict"
//Validar si el usuario y la contraseña ingresada son las mismas que se encuentran en la base de datos
var passInput = 12345;
var passBD = 12345;
if(passInput == passBD){
    console.log("Bienvenido!!");

}
//Ejercicio 2
//Validar si la persona puede votar si no, mostrar mensaje.
 var edadUsuario = 17;
 var limitevotacion = 18;
 if(edadUsuario == limitevotacion){
     console.log("Bienvenid@ a la votacion");


 }else if (edadUsuario < limitevotacion){
     console.log("Lo sentimos, aun no tiene la edad suficiente");
 }
 else{
     console.log("Lo sentimos, ha surgido un error. Por favor, ingrese solamente numeros");
 }
 //Ejercicio 3
 //If anidado
 //Una aerolinea presenta la siguiente oferta: Si el pasajero tiene menos de 10 años tiene un 10% descuento.
 //Si el destino es Cartagena, dicho pasajero tendra el 10% adicional sobre el valor final
 //y si la aerolinea es Latam tendra otro 10% adcional sobre el valor resultante
 var edadPasajero = 9;
 var costoTiquete = 250000;
 var destinoPasajero = "Cartagena";
 var destinoOferta = "Cartagena";
 var aerolineaPasajero = "Latam";
 var aerolineaOferta = "Latam";
 var valor_final = 0;
