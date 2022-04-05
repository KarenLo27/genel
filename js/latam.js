"use strict"
let horaIda = new Date(2022, 4, 5 , 7, 30, 0);
let horaLlegada= new Date(2022, 4, 5, 11, 30, 0);

let horaIda2 = new Date(2022, 4, 5, 9, 10, 0);
let horaLlegada2 = new Date(2022, 4, 5, 1, 10, 0);

let horaIda3 = new Date(2022, 4, 5, 0, 0, 0);
let horaLlegada3 = new Date(2022, 4, 5, 0, 0, 0);


let vuelo=[{
    "origen": "BOG",
    "destino": "CTG",
    "horaIda1": horaIda.getHours()+ ":" + horaIda.getMinutes(),
    "horaLlegada1": horaLlegada.getHours()+ ":" + horaLlegada.getMinutes(),
    "duracion": "Duracion",
    "precio": 5600000,
   
    
    
},
{
    "origen": "BOG",
    "destino": "CTG",
    "horaIda2": horaIda2.getHours()+ ":" + horaIda2.getMinutes(),
    "horaLlegada2": horaLlegada2.getHours()+ ":" + horaLlegada2.getMinutes(),
    "duracion": "Duracion",
    "precio": 6000000,
   
    
},
{
    "origen": "BOG",
    "destino": "CTG",
    "horaIda3": horaIda3.getHours()+ ":" + horaIda3.getMinutes(),
    "horaLlegada3": horaLlegada3.getHours()+ ":" + horaLlegada3.getMinutes(),
    "duracion": "Duracion",
    "precio": 6100000,
   
    

}
];
class Vuelos{
    constructor(origen, destino,horaIda,horaLlegada,duracion, precio){
        this.origen= origen;
        this.destino= destino;
        this.horaIda= horaIda;
        this.horaLlegada= horaLlegada;
        this.precio= precio;
        this.duracion= duracion;
    }
}
function mostrarVuelos() {
    for (let i = 0; i < vuelo.length; i++) {
    CargarVuelos(vuelo[i].origen, vuelo[i].destino,vuelo[i].precio,vuelo[i].horaIda, vuelo[i].horaLlegada,vuelo[i].duracion);
    }
}



    function CargarVuelos(origen, destino, precio,horaIda, horaLlegada, duracion){

        let contenedor=document.createElement("div");
        let contenMain=document.getElementById("main_content");
        contenMain.appendChild(contenedor);
        contenedor.setAttribute("class", "container");

        let LabelOrigen =document.createElement("label");
        contenedor.appendChild(LabelOrigen );
        let nodoOrigen = document.createTextNode(origen);
        LabelOrigen .appendChild(nodoOrigen);
        LabelOrigen .setAttribute("class", "labelorigen");
    
        let LabelDestino =document.createElement("label");
        contenedor.appendChild(LabelDestino );
        let nodoDestino = document.createTextNode(destino);
        LabelDestino .appendChild(nodoDestino);
        LabelDestino .setAttribute("class", "labeldestino");

        let LabelPrecio=document.createElement("label");
        contenedor.appendChild(LabelPrecio);
        let nodoPrecio = document.createTextNode("COP $"+ precio);
        LabelPrecio.appendChild(nodoPrecio);
        LabelPrecio.setAttribute("class", "labelprecio");
    
        let LabelIda=document.createElement("label");
        contenedor.appendChild(LabelIda);
        let nodoIda = document.createTextNode(horaIda+"11:42 am");
        LabelIda.appendChild(nodoIda);
        LabelIda.setAttribute("class", "labelIda");
    
        let LabelLlegada=document.createElement("label");
        contenedor.appendChild(LabelLlegada);
        let nodoLlegada = document.createTextNode(horaLlegada+ " " + "2:42pm");
        LabelLlegada.appendChild(nodoLlegada);
        LabelLlegada.setAttribute("class", "labelLlegada");
    
        let LabelDirecto =document.createElement("label");
        contenedor.appendChild(LabelDirecto);
        let nodoVueloDirecto = document.createTextNode("Directo");
        LabelDirecto.appendChild(nodoVueloDirecto);
        LabelDirecto.setAttribute("class", "VueloDirecto");
    
        let linea=document.createElement("hr");
        contenedor.appendChild(linea);
        linea.setAttribute("class", "linea");
    
    
        let Duracion =document.createElement("label");
        contenedor.appendChild(Duracion);
        let nodoDuracion = document.createTextNode("1h 20Min");
        Duracion.appendChild(nodoDuracion);
        Duracion.setAttribute("class", "labelDuracion");
        
    }
    
    window.onload= function(){
        mostrarVuelos();
    }


 

