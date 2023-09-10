(() => {

    const propFormulario = {
        formulario: document.formulario_contacto,
        elementos: document.formulario_contacto.elements,
        error: null,
        textoError: null
    }


    // Objeto con métodos de formulario

    const metFormulario = {

        inicio: () => {
            // Asignamos eventos a los elementos del formulario
            for (const elemento of propFormulario.elementos) {
                if (
                    elemento.type === 'text' ||
                    elemento.type === 'email' ||
                    elemento.nodeName.toLowerCase() === 'textarea'
                ) {
                    elemento.addEventListener('focus', metFormulario.focusInput);
                    elemento.addEventListener('blur', metFormulario.blurInput);
                }
            }

            // Validar el formulario, que no se envíe mientras falte algún campo.
            propFormulario.formulario.addEventListener('submit', metFormulario.validarInputs);
        },

        focusInput() {
            this.parentElement.children[1].className = 'label active';
        },

        blurInput() {
            if (this.value == '') {
                this.parentElement.children[1].className = 'label';
            }
        },

        validarInputs(e) {
            // Validamos los inputs al momento de enviar el formulario
            for (const elemento of propFormulario.elementos) {

                // Prevenimos que si el formulario está vacío, se envíe el formulario.
                if (elemento.value == '') {
                    e.preventDefault();

                    if (elemento.parentElement.querySelectorAll('.error').length === 0) {
                        // Creamos un mensaje de error si el campo está vacío y no hay mensajes de error previos
                        const error = document.createElement('p');
                        error.textContent = `Por favor llena el espacio con ${elemento.name}`;
                        error.classList.add('error');
                        elemento.parentElement.appendChild(error);
                    }
                } else {
                    // Removemos el mensaje de error si el campo ya tiene un valor
                    const error = elemento.parentElement.querySelector('.error');
                    if (error) {
                        elemento.parentElement.removeChild(error);
                    }
                }
            }
        }
    }

    metFormulario.inicio();

})();