"use strict"

class Automovil{
    constructor (marca, modelo, anyo, imagen){
           this.marca = marca;
           this.modelo = modelo;
           this.anyo = anyo;
           this.imagen= imagen;

    }
}
let auto= new Automovil("Mazda 3", "Touring", 2019, "img/renault.jpg");

function mostrarVehiculo(){

    alert(auto.marca+ " " + auto.modelo);

  let contenedor = document.createElement("div");
  let contentMain = document.getElementById("container");
    contentMain.appendChild(contenedor);

  let nodoMarca = document.createElement("label");
    contenedor.appendChild(nodoMarca);
  let nodoMarcaTxt= document.createTextNode(auto.marca);
    nodoMarca.appendChild(nodoMarcaTxt); 

  let nodoModelo = document.createElement("label");
    contenedor.appendChild(nodoModelo);
  let nodoModeloTxt= document.createTextNode(auto.modelo);
   nodoModelo.appendChild(nodoModeloTxt);  

  let nodoAnyo = document.createElement("label");
   contenedor.appendChild(nodoAnyo);
  let nodoAnyoTxt= document.createTextNode(auto.anyo);
  nodoAnyo.appendChild(nodoAnyoTxt);  

  let nodoImagen = document.createElement("img");
  contenedor.appendChild(nodoImagen);
  nodoImagen.setAttribute("src","img/renault.jpg");
  
}
window.addEventListener("keydown", function(event){
let busqueda = this.document.getElementById("textoBusqueda").value;
if(event.key == "Enter"){
  limpiarVentana();
  if(busqueda == "Mazda 3") {
    mostrarVehiculo(auto2);
    mostrarVehiculo(auto1);
    mostrarVehiculo(auto3);
    mostrarVehiculo(auto4);
  }
  else if (busqueda == "Toyota Corolla") {
    mostrarVehiculo(auto5);
  }
  else{
    this.alert("No se han encontrado coincidencias");
  }
}
});
