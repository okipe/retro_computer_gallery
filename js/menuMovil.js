const propMenu = {
    burgerMenu: document.getElementById('burger_menu'),
    slideMenu: document.getElementById('slideMenu'),
    menuActivo: false,
    elemMenu: document.querySelectorAll('#slideMenu .menu-principal a'),
}

// Métodos de menú movil

const metMenu = {
    inicio: () => {
        // Esto selecciona el burger menú con el clic
        propMenu.burgerMenu.addEventListener('click', metMenu.toggleMenu);

        for (const elem of propMenu.elemMenu) {
            elem.addEventListener('click', metMenu.ocultarMenu);
        }
    },

    toggleMenu: () => {
        if (!propMenu.menuActivo) {
            propMenu.menuActivo = true;
            propMenu.slideMenu.className = propMenu.slideMenu.className + ' active';
        } else {
            propMenu.menuActivo = false;
            propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
        }

    },

    ocultarMenu: () => {
        propMenu.menuActivo = false;
        propMenu.slideMenu.className = propMenu.slideMenu.className.replace('active', '');
    }
}

metMenu.inicio();