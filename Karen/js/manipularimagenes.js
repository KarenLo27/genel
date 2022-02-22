function interCambioImagenes(id , ruta){
  document.getElementById(id).src = ruta;
}
function retornoImagen(){
    document.getElementById('img-gibli')
    .src= "img/Studio-Ghibli.jpg";
}
function ocultarImagen() {
    document.getElementById("img-totoro").className = "hidden";
}
function mostrarImagen() {
    document.getElementById("img-totoro").className = "img-invisible";
}