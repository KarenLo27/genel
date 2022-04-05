"use strict"
let horaIda1 = new Date(2022, 4, 5 , 7, 30, 0);
let horaLlegada1= new Date(2022, 4, 5, 11, 30, 0);

let horaIda2 = new Date(2022, 4, 5, 9, 10, 0);
let horaLlegada2 = new Date(2022, 4, 5, 1, 10, 0);

let horaIda3 = new Date(2022, 4, 5, 0, 0, 0);
let horaLlegada3 = new Date(2022, 4, 5, 0, 0, 0);


let vuelo=[{
    "origen": "BGT",
    "destino": "DB",
    "horaIda1": horaIda1.getHours()+ ":" + horaIda1.getMinutes(),
    "horaDeLlegada": horaLlegada1.getHours()+ ":" + horaLlegada1.getMinutes(),
    "precio": 5600000,
    "directo": "Directo",
    "economico": "Hasta el mas economico económico",
    
},
{
    "origen": "BGT",
    "destino": "DB",
    "horaIda2": horaIda2.getHours()+ ":" + horaIda2.getMinutes(),
    "horaDeLlegada": horaLlegada2.getHours()+ ":" + horaLlegada2.getMinutes(),
    "precio": 6000000,
    "directo": "Directo",
    "economico": "Hata el mas  económico",
},
{
    "origen": "BGT",
    "destino": "DB",
    "horaIda3": horaIda3.getUTCHours()+ ":" + horaIda3.getMinutes(),
    "horaDeLlegada": horaLlegada3.getHours()+ ":" + horaLlegada3.getMinutes(),
    "precio": 6100000,
    "directo": "Directo",
    "economico": "Hata el mas económico",

}
];
class Vuelos{
    constructor(origen, destino, precio,horaIda,horaLlegada,directo,economico){
        this.origen= origen;
        this.destino= destino;
        this.precio= precio;
        this.horaIda= this.horaIda;
        this.horaLlegada= horaLlegada;
        this.economico= economico;
    }
}
function mostrarVuelos() {
    for (let i = 0; i < vuelo.length; i++) {
    cargarVuelos(vuelo[i].origen, vuelo[i].destino,vuelo[i].precio,vuelo[i].horaIda, vuelo[i].horaDeLlegada, vuelo[i].economico);
    }
}



    function CargarVuelos(origen,destino,precio,horaDeSalida,horaDeLlegada,economico){
        let contenedor=document.createElement("div");
        let contenMain=document.getElementById("main_content");
        contenMain.appendChild(contenedor);
        contenedor.setAttribute("class", "container");

        let LabelOrigen =document.createElement("label");
        contenedor.appendChild(LabelOrigen );
        let nodoOrigen = document.createTextNode(origen);
        LabelOrigen .appendChild(nodoOrigen);
        LabelOrigen .setAttribute("class", "css-labelorigen");
    
        let LabelDestino =document.createElement("label");
        contenedor.appendChild(LabelDestino );
        let nodoDestino = document.createTextNode(destino);
        LabelDestino .appendChild(nodoDestino);
        LabelDestino .setAttribute("class", "css-labeldestino");

        let LabelPrecio=document.createElement("label");
        contenedor.appendChild(LabelPrecio);
        let nodoPrecio = document.createTextNode("COP $"+ precio);
        LabelPrecio.appendChild(nodoPrecio);
        LabelPrecio.setAttribute("class", "css-labelprecio");
    
        let Labelsalida=document.createElement("label");
        contenedor.appendChild(Labelsalida);
        let nodoSalida = document.createTextNode(horaDeSalida+" am");
        Labelsalida.appendChild(nodoSalida);
        Labelsalida.setAttribute("class", "csslabelSalida");
    
        let linea=document.createElement("hr");
        contenedor.appendChild(linea);
        linea.setAttribute("class", "linea");
    
        let LabelLlegada=document.createElement("label");
        contenedor.appendChild(LabelLlegada);
        let nodoLlegada = document.createTextNode(horaDeLlegada+ " " + "pm");
        LlegadaVuLabelLlegadaelo.appendChild(nodoLlegada);
        LabelLlegada.setAttribute("class", "csslabelLlegada");
    
        let LabelDirecto =document.createElement("label");
        contenedor.appendChild(LabelDirecto);
        let nodoVueloDirecto = document.createTextNode("Directo");
        LabelDirecto.appendChild(nodoVueloDirecto);
        LabelDirecto.setAttribute("class", "css-VueloDirecto");
    
        let LabelEconomico=document.createElement("label");
        contenedor.appendChild(LabelEconomico);
        let nodoVueloEconomico = document.createTextNode(economico);
        LabelEconomico.appendChild(nodoVueloEconomico);
        LabelEconomico.setAttribute("class", "csslabelEconomico");
    
        let textoDuracion =document.createElement("label");
        contenedor.appendChild(textoDuracion);
        let nodotextoDuracion = document.createTextNode("Duracion");
        textoDuracion.appendChild(nodotextoDuracion);
        textoDuracion.setAttribute("class", "cssTextoDuracion");
    
        let LabelDuracion =document.createElement("label");
        contenedor.appendChild(LabelDuracion);
        let nodoDuracion = document.createTextNode("28hrs");
        LabelDuracion.appendChild(nodoDuracion);
        LabelDuracion.setAttribute("class", "csslabelDuracion");
        
    }
    
    window.onload= function(){
        mostrarVuelos();
    }


 

