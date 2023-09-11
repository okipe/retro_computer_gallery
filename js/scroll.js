(() => {

    // Propiedades del scroll
    const propScroll = {
        posicion: window.scrollY,
        scrollSuave: document.getElementsByClassName('scroll-suave'),
        volverArriba: document.getElementsByClassName('volver-arriba'),
        destino: null,
        seccionDistancia: null,
        intervalo: null
    }  


    // Objeto con métodos del scroll
    const metScroll = {
        inicio: () => {
            for (var i = 0; i < propScroll.scrollSuave.length; i++) {
                propScroll.scrollSuave[i].addEventListener('click', metScroll.moverse);
            }

            for (var i = 0; i < propScroll.volverArriba.length; i++) {
                propScroll.volverArriba[i].addEventListener('click', metScroll.subir);
            }
        },

        // Hacer suave a la animación
        moverse(e) {
            // Evita que el enlace se comporte como un enlace normal (scroll instantáneo)
            e.preventDefault();
            clearInterval(propScroll.intervalo);
            propScroll.destino = this.getAttribute('href');
            // Midiendo la distancia entre el enlace de menú y el elementodestino
            propScroll.seccionDistancia = document.querySelector(propScroll.destino).offsetTop - 94;
            
            propScroll.posicion = window.scrollY;
            propScroll.intervalo = setInterval(function (){
                
                // Con esto, se avanzará hacia abajo. Luego detiene la animación.
                if (propScroll.posicion < propScroll.seccionDistancia) {
                    propScroll.posicion += 30;

                    if (propScroll.posicion >= propScroll.seccionDistancia) {
                        clearInterval(propScroll.intervalo);
                    }

                } else { 
                    propScroll.posicion -= 30;
                    if (propScroll.posicion <= propScroll.seccionDistancia) {
                        clearInterval(propScroll.intervalo);
                    }
                }

                window.scrollTo(0, propScroll.posicion);
            }, 15);

        },

        subir (e) {
            e.preventDefault();
            clearInterval(propScroll.intervalo);

            propScroll.posicion = window.scrollY;
            propScroll.intervalo = setInterval(function(){
                
                if ( propScroll.posicion > 0 ) {
                // Esto es para cuando esté en la posición 0, no haga nada
                    propScroll.posicion -= 30;

                    if (propScroll.posicion <= 0) {
                        clearInterval(propScroll.intervalo);
                    } 
                    
                } else {
                    // Esto devuelve el valor de la función y detiene la animación
                    return;
                }

                window.scrollTo(0, propScroll.posicion);            

            }, 15);
        }
    }
    metScroll.inicio();

})();