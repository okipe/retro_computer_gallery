// Propiedades del menú movil

var propMenu = {

    burger_menu: document.getElementById('burger_menu'),
    slideMenu: document.getElementById('slideMenu'),
    menu_activo: false,
    elem_menu: document.querySelectorAll('#slideMenu .menu-principal a')
}

// Métodos de menú movil

var metMenu = {

    inicio: function () {
        
        propMenu.burger_menu.addEventListener('click', metMenu.toggleMenu);
        // Esto selecciona el burger menú con el clic

        for (var i = 0; i < propMenu.elem_menu.length; i++) {
            propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu); 
        }

       
    },

    toggleMenu: function () {
        if ( propMenu.menu_activo == false ) {
            
            propMenu.menu_activo = true;
            propMenu.slideMenu.className = propMenu.slideMenu.className + ' active';


        } else {
            propMenu.menu_activo = false;
            propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
            // Esto es para cuando se haga clic de nuevo en el burger, desaparezca el menú
        }

    },

    ocultarMenu: function () {
        propMenu.menu_activo = false;
        propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
    // Esto hará que luego de hacer clic en un elemento del menu burger, desaparezca automáticante.
    }

}

metMenu.inicio();