(() => {

    // Objeto con propiedades de Tab
    const propTabs = {
        primerEncabezado: document.getElementById('encabezado_dias').firstElementChild,
        primerContenido: document.getElementById('contenido_dias').firstElementChild,
        enlacesEncabezados: document.querySelectorAll('#encabezado_dias li a'),
        liEncabezado: document.querySelectorAll('#encabezado_dias li'),
        divsContenido: document.querySelectorAll('#contenido_dias > div'),
        contenidoActivo: null
    }

    // Objeto con métodos de Tab
    const metTabs = {
        inicio() {
            // Agregamos la clase 'active' al HTML de la pestaña inicial.
            propTabs.primerEncabezado.className = 'active';
            propTabs.primerContenido.className = 'active';

            // Asignamos el evento click a cada enlace del encabezado.
            propTabs.enlacesEncabezados.forEach((enlace) => {
                enlace.addEventListener('click', metTabs.evento);
                // Asignamos el evento click a cada enlace del encabezado.
              });
        },

        evento(e) {
            // Prevenimos el comportamiento por defecto, que es seguir el enlace del href
            e.preventDefault();
            
            // Quitamos la clase 'active' a los encabezados y a los contenidos
            propTabs.liEncabezado.forEach((li) => {
                li.classList.remove('active');
            });

            propTabs.divsContenido.forEach((div) => {
                div.classList.remove('active');
            });

            const parentLi = this.parentElement;
            parentLi.classList.add('active');
            // Almacenamos el valor del atributo href en propTabs.
            propTabs.contenidoActivo = this.getAttribute('href');

            // Con ello selecciona el atributo y le coloca la clase active. Ya funciona el selector de listas de actividades
            const contenidoActivo = document.querySelector(propTabs.contenidoActivo);
            contenidoActivo.classList.add('active');

            // Transiciones
            contenidoActivo.style.opacity = 0;
            setTimeout(() => {
                contenidoActivo.style.opacity = 1
            }, 100);
        }
    }

    // Iniciamos el script cuando la página se carge.
    metTabs.inicio();

})();