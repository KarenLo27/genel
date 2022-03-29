"use strict"
//variables globales
let nodoTabla = undefined;
limpiarFormulario();
function cargarProducto(){
    if(validarFormulario()){
        if(!document.getElementById("table-stock")){

        }
        registrarDate();
    }
}

function crearEncabezado(){
    nodoTabla = document.createElement("table");
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
    if (validarFormulario()) {
        if (!document.getElementById("table-stock")) {
            crearEncabezado();
        }
        cargarProducto();
    }
}

function cargarProducto(){

    let inputCodigo = document.getElementById("codigo").value;
    let inputCodigoNodo = document.createTextNode(inputCodigo);
    let inputDescripcion = document.getElementById("descripcion").value;
    let inputDescripcionNodo = document.createTextNode(inputDescripcion);
    let inputValorUnitario = document.getElementById("valorUnitario").value;
    let inputValorUnitarioNodo = document.createTextNode(inputValorUnitario);
    let inputUnidadStock = document.getElementById("unidadStock").value;
    let inputUnidadStockNodo = document.createTextNode(inputUnidadStock);
    cargarInfoTabla(inputCodigoNodo, inputDescripcionNodo, inputValorUnitarioNodo, inputUnidadStockNodo); 
}
function cargarInfoTabla (codigo, descripcion, valorUnitario, unidadStock) {
    let nodoProducto = document.createElement("tr");
    nodoTabla.appendChild(nodoProducto);
    /* Crear un elemento de tipo td */

    let nodoCodigoTD = document.createElement("td");
    nodoProducto.appendChild(nodoCodigoTD);
    nodoCodigoTD.appendChild(codigo);

    let nodoDescripTD = document.createElement("td");
    nodoProducto.appendChild(nodoDescripTD);
    nodoDescripTD.appendChild(descripcion);

    let nodoValorUnitario = document.createElement("td")
    nodoProducto.appendChild(nodoValorUnitario);
    nodoValorUnitario.appendChild(valorUnitario);

    let nodoUnidadStock = document.createElement("td");
    nodoProducto.appendChild(nodoUnidadStock);
    nodoUnidadStock.appendChild(unidadStock);
} 
function validarFormulario(){
    if(document.getElementById("codigo").value.trim() == ""){
        alert("por favor ingrese  la codigo");
        document.getElementById("codigo").focus();
        return false;
    }
    if(document.getElementById("descripcion").value.trim() == ""){
        alert("por favor ingrese la descripcion en descripcion");
        document.getElementById("descripcion").focus();
        return false;
    }
    if(document.getElementById("valorUnitario").value.trim() == ""){
        alert("por favor ingrese la descripcion en valor unitario");
        document.getElementById("valorUnitario").focus();
        return false;
    }
    if(document.getElementById("unidadStock").value.trim() == ""){
        alert("por favor ingrese la descripcion en Unidad stock");
        document.getElementById("unidadStock").focus();
        return false;
    }
    return true;
}
function crearTabla(){
limpiarFormulario();
}
function limpiarFormulario(){
  document.getElementById("codigo").value="";
  document.getElementById("descripcion").value="";
  document.getElementById("valorUnitario").value="";
  document.getElementById("unidadStock").value="";

}
