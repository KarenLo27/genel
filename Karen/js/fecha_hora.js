"use strict"
//Obtener fecha y hora actual
var currenTime = new Date();
console.log(currenTime);
//Metodos para extraer elementos
var anyoActual= currenTime.getFullYear();
console.log("Años Actual:" + anyoActual);

var mesActual= currenTime.getMonth();
console.log("Mes Actual:"+ (mesActual + 1));

var diaMesActual = currenTime.getDate();
console.log("Dia del mes:"+diaMesActual );

var diaSemana =currenTime.getDay();
console.log("Hora actual:" + horaActual);

var minActual = currenTime.getMinutes();
console.log("Minutos Actual:" + minActual);

var segActual = currenTime.getSeconds();
console.log("Segundos Actual:" + segActual);

var milActual = currenTime.getMilliseconds();
console.log("Milisegundos Actual" + milActual);

var ms1970 = currenTime.getTime();
console.log(ms1970);

//Determinar cuantos dias faltan para año nuevo
var fechaNewYear = new Date("December 1, 2021");
var msFechaNewYear = fechaNewYear.getTime();
var mscurrenTime = mscurrenTime.getTime();
var msFaltantes = msFechaNewYear - mscurrenTime;
console.log(msFaltantes);

var minufechanewYear = (((msFaltantes/ 1000)/60)/60/24);
console.log(Math.ceil(minufechanewYear));
