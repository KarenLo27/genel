function parrafoEspecial() {
    let parrafos= document.getElementByIdTagName("P");
    parrafos[2].style.fontFamily = "Verdana, Geneva, sans-serif";
    parrafos[2].style.fontFamily = "Verdana, Geneva, sans-serif";

}
function llamarColor() {
    let contenedores = document.getElementsByTagName("div");
    for (let i = 0; i <= contenedores.length; i++){
        contenedores[i].style.backgroundColor = "darkcyan";
    }
}