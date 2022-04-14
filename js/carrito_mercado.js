"use strict"

class Automovil{
    constructor(marca, modelo, precio, imagen){
        this.Marca = marca;
        this.Modelo = modelo;
        this.Precio = precio;
        this.Imagen = imagen;
    }
}

let auto = new Automovil ("Ford ", "Fusion", "$55.000.000 ", "img/ford1.jfif")

let auto2 = new Automovil ("Ford ", "EcoSport ", "$8.000.000 ", "img/ford2.jfif")

let auto3 = new Automovil ("Ford ", "Focus", "$80.000.000 ", "img/ford3.jfif")

function mostrarVehiculo() {
    let contentPrincipal = document.getElementById("mainContent");
    let contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    let imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", auto.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    let contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    let marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    let textMarca = document.createTextNode(auto.Marca);
    marcaAuto.appendChild(textMarca);

    let modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    let textModelo  =  document.createTextNode(auto.Modelo);
    modeloAuto.appendChild(textModelo);

    let precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    let textAuto = document.createTextNode(auto.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")

    //Segundo auto

    contentPrincipal = document.getElementById("mainContent");
    contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", auto2.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    textMarca = document.createTextNode(auto2.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(auto2.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    textAuto = document.createTextNode(auto2.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")

    // Tercer auto

    contentPrincipal = document.getElementById("mainContent");
    contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", auto3.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    textMarca = document.createTextNode(auto3.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(auto3.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    textAuto = document.createTextNode(auto3.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")
}

//Segunda busqueda

let mustang = new Automovil ("Mustang ", "Xtz 250", "$20.000.000", "img/mustang1.jfif");

let mustang2 = new Automovil ("Mustang ", "MT-09 ", "$85.000.000", "img/mustang2.jfif");

let mustang3 = new Automovil ("Mustang ", "Rx 112 ", "$12.000.000", "img/mustang3.jfif");

function mostrarMustang () {

    let contentPrincipal = document.getElementById("mainContent");
    let contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    let imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", mustang.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    let contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    let marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    let textMarca = document.createTextNode(mustang.Marca);
    marcaAuto.appendChild(textMarca);

    let modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    let textModelo  =  document.createTextNode(mustang.Modelo);
    modeloAuto.appendChild(textModelo);

    let precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    let textAuto = document.createTextNode(mustang.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")
    
    //Segundo auto

    contentPrincipal = document.getElementById("mainContent");
    contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", mustang2.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    textMarca = document.createTextNode(mustang2.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(mustang2.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    textAuto = document.createTextNode(mustang2.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")

    // Tercer auto 

    contentPrincipal = document.getElementById("mainContent");
    contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);
    contentAuto.setAttribute("class", "contenidoIndividual");

    imagenAuto  = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", mustang3.Imagen);
    imagenAuto.setAttribute("class", "imagen")

    contentDescripcion = document.createElement("div");
    contentAuto.appendChild(contentDescripcion);
    contentDescripcion.setAttribute("class", "descripcion")

    marcaAuto = document.createElement("label");
    contentDescripcion.appendChild(marcaAuto);
    textMarca = document.createTextNode(mustang3.Marca);
    marcaAuto.appendChild(textMarca);

    modeloAuto  =  document.createElement("label");
    contentDescripcion.appendChild(modeloAuto);
    textModelo  =  document.createTextNode(mustang3.Modelo);
    modeloAuto.appendChild(textModelo);

    precioAuto = document.createElement("label");
    contentDescripcion.appendChild(precioAuto);
    textAuto = document.createTextNode(mustang3.Precio);
    precioAuto.appendChild(textAuto);
    precioAuto.setAttribute("class", "precio")
}


window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if (event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Automóviles disponibles") {
            mostrarVehiculo(auto, auto2, auto3);
            mostrarMustang(Ford, Ford2, Ford3);
            mostarChevrolet(chevrolet, chevrolet2, chevrolet3);
        }
        else if (busqueda == "Ford") {
            mostrarVehiculo(auto, auto2, auto3);
        }
        else if (busqueda == "Mustang") {
            mostrarYamaha(yamaha, yamaha2, yamaha3);}

        else {
            alert("No se han encontrado resultados que coincidan con la busqueda");
        } 
    }
})

function limpiarVentana () {
    document.getElementById("mainContent").innerHTML = "" ;
}
