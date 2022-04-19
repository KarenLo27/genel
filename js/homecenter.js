"use strict"

let botonForm = document.getElementById("botonForm");
let botonCerrar = document.getElementById("botonCerrar");
let popUp = document.getElementById("pop-up");

botonForm.addEventListener("click", mostrarForm);
botonCerrar.addEventListener("click", ocultarForm);

function mostrarForm(){
    popUp.classList.add("popUp-Visible");
   popUp.classList.remove("popUp-Invisible");
     botonCerrar.classList.add("botonCerrarVisible");
    botonCerrar.classList.remove("botonCerrarInvisible");
}

function ocultarForm() {
    popUp.classList.remove("popUp-Visible");
    popUp.classList.add("popUp-Invisible");
    botonCerrar.classList.remove("botonCerrarVisible");
    botonCerrar.classList.add("botonCerrarInvisible")

} 