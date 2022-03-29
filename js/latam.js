 let vuelo = [{
     "origen": "BGT",
     "destino": "CTG",
     "precio": 37500,
     "hora_ida":"",
     "hora_llegada": ""
 },
 {
    "origen": "BGT",
    "destino": "CTG",
    "precio": 415000
 }];
 function mostrarVuelos(){
    for(let i =0; i < vuelo.length; i++){
        CargarVuelos(vuelo[i].origen, vuelo[i].destino, vuelo[i].precio);
    }
}


function CargarVuelos(origen, destino, precio){

   let contenedor = document.getElementById("main-content");
   let contenedorVuelo = document.createElement("div");
   contenedor.appendChild(contenedorVuelo);

   let labelOrigen = document.createElement("label");
   contenedorVuelo.appendChild(labelOrigen);
   let nodoTxtVuelo = document.createTextNode(origen);
   labelOrigen.appendChild(nodoTxtVuelo);

   let labelDestino = document.createElement("label");
   contenedorVuelo.appendChild(labelDestino);
   let nodoTxtDestino = document.createTextNode(destino);
   labelDestino.appendChild(nodoTxtDestino);

   let labelPrecio = document.createElement("label");
   contenedorVuelo.appendChild(labelPrecio);
   let nodoTxtPrecio = document.createTextNode(precio);
   labelPrecio.appendChild(nodoTxtPrecio);

   //let viaje1 = new Date(2022, 03, 30, 10, 45, 0);
   //"horaSalida" = viaje1.getHours() + ":" + viaje1.getMinutes();

}
 

