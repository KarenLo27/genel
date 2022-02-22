function expandirTexto() {
    let textoCompleto = "Seis de las películas de Studio Ghibli se encuentran entre las 10 películas de anime más taquilleras realizadas en Japón, siendo El Viaje de Chihiro (2001) la segunda más alta, recaudando más de 360 millones de dólares en todo el mundo"+
    "Muchos de sus trabajos han ganado el premio Animage Anime Grand Prix, y cuatro han ganado el Premio de la Academia Japonesa de Animación del Año. Cinco de las películas de Studio Ghibli han recibido nominaciones al Óscar. El Viaje de Chihiro ganó el Oso de Oro en 2002 y el Premio de la Academia a la Mejor Película de Animación en 2003." + 
    "Totoro, un personaje de Mi vecino Totoro, es la mascota del estudio  <a href=javascript:void(0) onclick=reducirmenos();>Leer mas</a>;"
    
    document.getElementById("text-configurable").innerHTML = textoCompleto;
    
    
}
function reducirmenos() { 
    let menostexto = "El 3 de agosto de 2014, Studio Ghibli detuvo temporalmente la producción tras el retiro de Miyazaki. En febrero de 2017, Toshio Suzuki anunció que Miyazaki había vuelto a salir de su retiro para dirigir un nuevo largometraje, ¿Cómo vives?, con Studio Ghibli <a href=javascript:void(0) onclick=expandirTexto();>Leer menos</a>;"
    
    document.getElementById("text-configurable").innerHTML = menostexto;
    

}
