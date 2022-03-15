"use strict"

class Automovil{
    constructor (marca, modelo, anyo){
           this.marca = marca;
           this.modelo = modelo;
           this.anyo = anyo;

    }
}
let auto= new Automovil("Mazda 3", "Touring", 2019);
function mostrarVehiculo(){
    //alert(auto.marca+ " " + auto.modelo);
    let contenedor = document.createElement(contentMain);
    let contentMain = document.getElementById("main-content");
    contentMain.appendChild(contenedor);
    
    //let etiqueta = document.createElement();
    //let 


}
