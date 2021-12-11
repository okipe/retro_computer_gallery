(function(){

// Objetos con propiedades de Parallax
var propParallax = {
    seccion: document.querySelector('.parallax'),
    // Estoy seleccionando la clase Parallax
    recorrido: null,
    limite: null
}


// Objeto con métodos de Parallax
var metParallax = {
    inicio: function () {
        window.addEventListener('scroll',metParallax.scrollParallax)
    },
    
    scrollParallax: function () {
        propParallax.recorrido = window.pageYOffset;
        //pageYOffset Permite ver cuanto recorrido hizo el scroll

        propParallax.limite = propParallax.seccion.offsetTop + propParallax.seccion.offsetHeight; 
        // OffsetTop permite ver cuanto hay desde el tope de la página hasta el tope de determinado elemento. offsetHeight da la altura

        if ( propParallax.recorrido > propParallax.seccion.offsetTop - window.outerHeight && propParallax.recorrido <= propParallax.limite ) {
        // Verifica si se cumple 2 condiciones: si el recorrido es mayor al tope del elemento(menos la altura de la ventana), para que lo active, y si el recorrido es igual o menor al borde inferior del elemento.

            propParallax.seccion.style.backgroundPositionY = (propParallax.recorrido - propParallax.seccion.offsetTop) / 1.5 + 'px';
            // Divido porque el número es muy grande. Se hace la división entre 1.5 para que el recorrido del fondo Parallax tenga menor velocidad
 
        } else {
            propParallax.seccion.style.backgroundPositionY = 0
        }

    }
}

metParallax.inicio();
    
}())