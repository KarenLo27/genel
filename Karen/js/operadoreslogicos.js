"use strict"
/*AND ---- &&  (Y)
OR---- ii (O)
not ---! (negacion)
xor ---- (0 exclusivo)

para poder acceder al subsidio de transporte es
necesario que el aprendiz cuente con el SISBEN o Jovenes en accion,
para poder acceder al beneficio. Si el aprendiz cuenta
con los 2 beneficios no podra acceder alsubsidio
y si no cuenta con ningun beneficio tampoco podra accederal beneficio de transprte*/

var benefSisben = false;
var benefJovenes = true;
if (benefJovenes ^ benefSisben ){
console.log("El aprendiz puede acceder al beneficio de transporte");
}
else{
    console.log("No puede ingresar");
}