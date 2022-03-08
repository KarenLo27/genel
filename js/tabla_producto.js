"use strict"

function cargarProducto() {
   crearEncabezado();

 
}
function crearEncabezado(){
    let nodoTabla = document.createElement("table");
    let contenedorTabla = document.getElementById ("table-js");
    contenedorTabla.appendChild(nodoTabla);                                     

    let nodoFilaEncabezado = document.createElement("tr")
    nodoTabla.appendChild(nodoFilaEncabezado);

    let nodoThCodigo = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoThCodigo);
    let textNodoThCodigo = document.createTextNode("Codigo");
    nodoThCodigo.appendChild(textNodoThCodigo);

    let nodoThDescripcion = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoThDescripcion);
    let textNodoThDescripcion = document.createTextNode("Descripcion");
    nodoThDescripcion.appendChild(textNodoThDescripcion);

    let nodoThValor = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoThValor);
    let textNodoThValor = document.createTextNode("Valor Unitario");
    nodoThValor.appendChild(textNodoThValor);

    let nodoThUnidades = document.createElement("th");
    nodoFilaEncabezado.appendChild(nodoThUnidades);
    let textNodoThUnidades = document.createTextNode("Unidades de Stock");
    nodoThUnidades.appendChild(textNodoThUnidades);
   
}

function nose(){

}