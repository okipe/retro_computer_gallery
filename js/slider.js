(function(){
// Esto protege a la función de modificaciones


// Propiedades Slider
var propSlider = {
    slider: document.getElementById('slider'),
    // Aquí seleccionamos el id del slider.
    primerSlide: null
}

// Metodos slider
var metSlider = {
    inicio: function () {
        setInterval(metSlider.moverSlide, 3000);
        // Esto hace funcionar al slider de manera automática.
    },
    moverSlide: function () {
        propSlider.slider.style.transition = 'all 1s ease';
        propSlider.slider.style.marginLeft = '-100%';
        // Esto moverá el slide al -100%"

        setTimeout(function () {
            propSlider.primerSlide = propSlider.slider.firstElementChild;            
            // Esto mostrará el primer elemento hijo.

            propSlider.slider.appendChild(propSlider.primerSlide);
            // Esto moverá el primero al último elemento

            propSlider.slider.style.transition = 'unset';
            // Esto elimina el movimiento del slide en el cambio de orden de fotos del primero al último (margin-left: -100%)

            propSlider.slider.style.marginLeft = '0%';
            // Esto colocará el margin left a 0

        }, 1000);
        // Esto permitirá que el cambio de imagen (primero pasa al último) sea después de hecha la transición  (1000 milisegundos).
    }

}

metSlider.inicio();
// Esto hace iniciar al método Inicio


}())