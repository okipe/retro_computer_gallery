(() => {

    // Objetos con propiedades de Parallax
    const propParallax = {
        seccion: document.querySelector('.parallax'),
        recorrido: 0,
        limite: 0
    }

    // Objeto con métodos de Parallax
    const metParallax = {
        inicio: () => {
            window.addEventListener('scroll', metParallax.scrollParallax)
        },

        scrollParallax() {
            // Ver el recorrido del scrool y cuanto hay desde el tipe de página a determinado elemento
            propParallax.recorrido = window.scrollY;
            propParallax.limite = propParallax.seccion.offsetTop + propParallax.seccion.offsetHeight;

            // Verificamos si se cumplen: (1) El desplazamiento es mayor al inicio del elemento (menos la altura de la ventana) y (2) Si el desplazamiento es igual o menor que el borde inferior del elemento.
            if (propParallax.recorrido > propParallax.seccion.offsetTop - window.outerHeight && propParallax.recorrido <= propParallax.limite) {
                // Dividimos para reducir la velocidad del efecto parallax.
                propParallax.seccion.style.backgroundPositionY = (propParallax.recorrido - propParallax.seccion.offsetTop) / 1.5 + 'px';
            } else {
                propParallax.seccion.style.backgroundPositionY = 0;
            }
        },
    };

    metParallax.inicio();

})();