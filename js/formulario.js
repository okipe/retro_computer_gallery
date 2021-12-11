(function(){

// Objeto con propiedades de formulario
var propFormulario = {
    
    formulario: document.formulario_contacto,
    // Esta es una manera diferente de referirse a un elemento HTML, esta vez por su name.
    elementos: document.formulario_contacto.elements,
    // Aquí entro a las propiedades de elementos.
    error: null,
    textoError: null
}


// Objeto con métodos de formulario

var metFormulario = {

    inicio: function () {
    // Este método de inicio añadirá un evento a los distintos elementos, por ejemplo hacer clic en una parte del formulario
        for (var i = 0; i < propFormulario.elementos.length; i++) {
            if( propFormulario.elementos[i].type == 'text' || propFormulario.elementos[i].type == 'email' || propFormulario.elementos[i].nodeName.toLowerCase() == 'textarea'){
            // Con esto voy a comprobar el tipo de elemento que estoy validando. type es una propiedad que te dice el tipo de input. Node puede referirse a cuál es la etiqueta.
                propFormulario.elementos[i].addEventListener('focus', metFormulario.focusInput);
                // Esto añadirá un evento de focus
                propFormulario.elementos[i].addEventListener('blur', metFormulario.blurInput);
                // Esto añadirá un evento de blur
            }
        }

        propFormulario.formulario.addEventListener('submit', metFormulario.validarInputs);
        // Esto es para validar el formulario, que no se envíe mientras falte algún campo.

        
    },

    focusInput: function () {
        // Aquí ya vamos a definir focusInput
        this.parentElement.children[1].className = 'label active'; 
        // Aquí seleccionamos el label
    },

    blurInput: function () {
        if (this.value == '') {
            this.parentElement.children[1].className = 'label';
            // Esto hace que cuando se haga clic afuera, el texto de etiqueta vuelva a su posición; es decir, que le quite la clase active.
        }
    },

    validarInputs: function (e){
        for (var i = 0; i < propFormulario.elementos.length; i++) {
            
            if ( propFormulario.elementos[i].value == '' ) {
                e.preventDefault();
                // Esto prevendra que si el formulario está vacío, no se puedaenviar el formulario.
                
                if (propFormulario.elementos[i].parentElement.children.length < 3) {
                    // Estamos accediendo a los arreglos, para evitar que luego se siga generando los mensajes de error encima de otro. Para ello, si hay 3 elementos o más, se interrumpe
                
                
                    propFormulario.error = document.createElement('p');
                    propFormulario.textoError = document.createTextNode('Por favor llena el espacio con ' + propFormulario.elementos[i].name);
                    // Esto genera los textos de los mensajes de error.
                    propFormulario.error.appendChild(propFormulario.textoError);
                    propFormulario.error.className = 'error';
                    
                    propFormulario.elementos[i].parentElement.appendChild(propFormulario.error);
                    // Esto pone el mensaje de error debajo de los campos.
            
                }
            } else {

                if (propFormulario.elementos[i].parentElement.children.length >= 3) {
                // Vamos a ver si tiene un párrafo de error creado, para que lo elimine
                propFormulario.error = propFormulario.elementos[i].parentElement.getElementsByTagName('p')[0];
                propFormulario.elementos[i].parentElement.removeChild(propFormulario.error);
                }
            
            }
        }
    }
}

metFormulario.inicio();

} ())