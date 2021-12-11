(function(){

// Objeto con propiedades de Tab

var propTabs = {

    primer_encabezado: document.getElementById('encabezado_menu').firstElementChild,
    primer_contenido: document.getElementById('contenido_menu').firstElementChild,
    enlaces_encabezado: document.querySelectorAll('#encabezado_menu li a'),
    li_encabezado: document.querySelectorAll('#encabezado_menu li'),
    divs_contenido: document.querySelectorAll('#contenido_menu > div'),
    contenido_activo: null
}


// Objeto con métodos de Tab
var metTabs = {
    inicio: function(){
        propTabs.primer_encabezado.className = 'active';
        propTabs.primer_contenido.className = 'active';
        //esto asignará la clase 'active' al HTML de la carta.

        for (var i = 0; i < propTabs.enlaces_encabezado.length; i++) {
            propTabs.enlaces_encabezado[i].addEventListener('click', metTabs.evento);
            // Esto hará correr el arreglo de los tabs con el click
        }
    },

    evento: function(e) {
        e.preventDefault();
        //previene el comportamiento por defecto, que el click me lleve al ID #cafés
        for (var i = 0; i < propTabs.li_encabezado.length; i++) {
            propTabs.li_encabezado[i].className = '';
        }
        //quita la clase active a los encabezados


        for (var i = 0; i < propTabs.divs_contenido.length; i++) {
            propTabs.divs_contenido[i].className = '';
       }
        //quita la clase active a los contenidos

        this.parentElement.className = 'active';
        propTabs.contenido_activo = this.getAttribute('href');
        // este href se almacenará en Protabs

        document.querySelector(propTabs.contenido_activo).className = 'active';
        //con ello selecciona el atributo y le coloca la clase active. Ya funciona el selector de listas de menus y postres
        
        document.querySelector(propTabs.contenido_activo).style.opacity = 0;
        setTimeout(function(){
            document.querySelector(propTabs.contenido_activo).style.opacity = 1;
            // Esto es para las transiciones. Asegúrate que el CSS esté configurado.
        }, 100);
    }
}

metTabs.inicio();

}())