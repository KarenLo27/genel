"use strict"
//variables globales
let nodoTabla = undefined;

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
   
    nodoTabla.setAttribute("class", "table-style");
    nodoTabla.setAttribute("id", "table-stock");
}
function validarTabla() {
    if (!document.getElementById("table-stock")) {
        crearEncabezado();
    }
}
function cargarProducto(){
    validarTabla();

    let inputCodigo = document.getElementById("codigo").value;
    let inputCodigoNodo = document.createTextNode(inputCodigo);

    let inputDescripcion = document.getElementById("descripcion").value;
    let inputDescripcionNodo = document.createTextNode(inputDescripcion);

    let inputValorUnitario = document.getElementById("valorUnitario").value;
    let inputValorUnitarioNodo = document.createTextNode(inputValorUnitario);

    let inputUnidadStock = document.getElementById("unidadStock").value;
    let inputUnidadStockNodo = document.createTextNode(inputUnidadStock);

    cargarInfoTabla(inputCodigoNodo, inputDescripcionNodo, inputValorUnitarioNodo, inputUnidadStockNodo)
}
function cargarInfoTabla (codigo, descripcion, valorUnitario, unidadStock) {
    let nodoProducto = document.createElement("tr");
    nodoTabla.appendChild(nodoProducto);

    let nodoCodigoTD = document.createElement("td");
    nodoProducto.appendChild(nodoCodigoTD);
    nodoCodigoTD.appendChild(codigo);

    let nodoDescTD = document.createElement("td");
    nodoProducto.appendChild(nodoDescTD);
    nodoDescTD.appendChild(descripcion);

    let nodoValorUnitario = document.createElement("td")
    nodoProducto.appendChild(nodoValorUnitario);
    nodoValorUnitario.appendChild(valorUnitario);

    let nodoUnidadStock = document.createElement("td");
    nodoProducto.appendChild(nodoUnidadStock);
    nodoUnidadStock.appendChild(unidadStock);
}

