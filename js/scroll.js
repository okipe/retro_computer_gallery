(function(){
// Objeto con propiedades de efecto scroll
var propScroll = {

    posicion: window.pageYOffset,
    scroll_suave: document.getElementsByClassName('scroll-suave'),
    volver_arriba: document.getElementsByClassName('volver-arriba'),
    destino: null,
    seccion_distancia: null,
    intervalo: null
}  


// Objeto con métodos de efecto scroll
var metScroll = {

    inicio: function () {
        for (var i = 0; i < propScroll.scroll_suave.length; i++) {
            propScroll.scroll_suave[i].addEventListener('click', metScroll.moverse);
            // Esto es para que haya scroll del menú a un ancla en específico.
        }

        for (var i = 0; i < propScroll.volver_arriba.length; i++) {
            propScroll.volver_arriba[i].addEventListener('click', metScroll.subir);
            // Con esto, se da la función volver arriba.
        }
    },

    moverse: function (e) {
        e.preventDefault();
        clearInterval(propScroll.intervalo);
        // Esto es para evitar conflicto cuando hacemos clic en los elementos del menú varias veces
        propScroll.destino = this.getAttribute('href');
        propScroll.seccion_distancia = document.querySelector(propScroll.destino).offsetTop - 94;
        // Con esto esto midiendo la distancia entre el enlace de menú y la parte superior del elemento en cuestión.
        
        propScroll.posicion = window.pageYOffset;
        propScroll.intervalo = setInterval(function (){
            
            if (propScroll.posicion < propScroll.seccion_distancia) {
                // Con esto, se avanzará hacia abajo

                propScroll.posicion += 30;
                // La velocidad del recorrido

                if (propScroll.posicion >= propScroll.seccion_distancia) {
                    clearInterval(propScroll.intervalo);
                    // Esto permite liberar la posición de la pantalla una vez que llegemos al destino
                }

            } else { 
                propScroll.posicion -= 30;
                if (propScroll.posicion <= propScroll.seccion_distancia) {
                    clearInterval(propScroll.intervalo);
                }
            }

            window.scrollTo(0, propScroll.posicion);

        }, 15);
        // Esto es para que calcule desde la última posición, no desde el inicio de la página.

    },

    subir: function (e) {
        e.preventDefault();
        clearInterval(propScroll.intervalo);
        // Esto es para evitar conflicto cuando hacemos clic en los elementos del menú varias veces
        propScroll.posicion = window.pageYOffset;
        propScroll.intervalo = setInterval(function(){
            
            if ( propScroll.posicion > 0 ) {
            // Esto es para cuando esté ne la posición 0, no haga nada
                propScroll.posicion -= 30;

                if (propScroll.posicion <= 0) {
                    clearInterval(propScroll.intervalo);
                } 
                
            } else {
                return;
                // Esto devuelve el valor de la función y posibilita navegar libremente despues de hacer clic en "Inici"
            }

            window.scrollTo(0, propScroll.posicion);

        

        }, 15);

    }

}

metScroll.inicio();

}())