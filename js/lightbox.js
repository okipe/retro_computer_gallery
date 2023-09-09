document.addEventListener("DOMContentLoaded", () => {
    
    // Objeto con las propiedades del efecto Lightbox
    const propLightbox = {
        imgContainer: document.getElementsByClassName('lightbox'),
        imagen: null,
        imagenSrc: null,
        cuerpoDom: document.getElementsByTagName('body')[0],
        lightbox_container: null,
        modal: null,
        cerrarModal: null,
        animacion: 'fade'
    }

    const metLightbox = {
        inicio: function(){
            for (var i = 0; i < propLightbox.imgContainer.length; i++) {
                // Agregamos un evento de clic a cada elemento con la clase 'lightbox'.
                propLightbox.imgContainer[i].addEventListener('click', metLightbox.capturaImagen);
            }  
        },

        capturaImagen: function(){
            // Al hacer clic en un elemento 'lightbox', captura la imagen y llama a 'lightbox'
            propLightbox.imagen = this;
            metLightbox.lightbox(propLightbox.imagen);
        },

        lightbox: function(imagen){
            // Captura la URL de la imagen de fondo del elemento clicado. Con window.getComputedStyle obtengo los estilos CSS. Luego corto las primeras y últimas letras.
            propLightbox.imagenSrc = window.getComputedStyle(imagen, null).backgroundImage.slice(5, -2);

            // Creamos un contenedor para el lightbox
            propLightbox.cuerpoDom.appendChild(document.createElement('DIV')).setAttribute('id', 'lightbox_container');
            propLightbox.lightbox_container = document.getElementById('lightbox_container');

            propLightbox.lightbox_container.style.width = '100%';
            propLightbox.lightbox_container.style.height = '100%';
            propLightbox.lightbox_container.style.position = 'fixed';
            propLightbox.lightbox_container.style.zIndex = '1000';
            propLightbox.lightbox_container.style.background = 'rgba(0,0,0,0.8)';
            propLightbox.lightbox_container.style.top = '0';
            propLightbox.lightbox_container.style.left = '0';
            
            // Crea un contenedor para la imagen y establecemos su URL. También un hijo 'modal'
            propLightbox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
            propLightbox.modal = document.getElementById('modal');
            // Imagen al 100%
            propLightbox.modal.style.height = '100%';        
            propLightbox.modal.appendChild(document.createElement('IMG')).setAttribute('src', propLightbox.imagenSrc);
            
            // Agrega una clase para la animación de entrada (fade)
            propLightbox.modal.getElementsByTagName('img')[0].setAttribute('class', 'imagen-modal');

            if (propLightbox.animacion == 'fade') {
                // Realiza una animación fade-in
                document.getElementsByClassName('imagen-modal')[0].style.opacity = 0;
                
                setTimeout(function() {
                    document.getElementsByClassName('imagen-modal')[0].style.opacity = 1;
                }, 50); // 50 milisegundos
            }

            // Agrega un botón de cierre al lightbox
            propLightbox.modal.innerHTML += '<i id="cerrar_modal" class="fa fa-times" aria-hidden="true"></i>';
            propLightbox.cerrarModal = document.getElementById('cerrar_modal');
            propLightbox.cerrarModal.addEventListener('click', metLightbox.cerrarModal);

        },

        // Cierra el lightbox al eliminar su contenedor principal
        cerrarModal: function(){
            propLightbox.cuerpoDom.removeChild(propLightbox.lightbox_container); 
        }
    }

    // Esto inicia la funcionalidad del lightbox.
    metLightbox.inicio();
});
