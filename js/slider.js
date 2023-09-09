// Encapsulamos el código para evitar variables globales
(function () {

    // Propiedades del Slider
    const propSlider = {
        slider: document.getElementById('slider'),
        primerSlide: null
    }

    // Metodos del slider
    const metSlider = {
        inicio: function () {
            setInterval(metSlider.moverSlide, 4000);// 4 segundos
        },

        moverSlide() {
            // Usamos destructuración para acceder a las propiedades del objeto propSlider
            const { slider } = propSlider;
            slider.style.transition = 'all 1s ease';
            // Esto moverá el slide al -100% (siguiente slide).
            slider.style.marginLeft = '-100%';

            setTimeout(() => {
                propSlider.primerSlide = slider.firstElementChild;
                // Esto moverá el primero al último elemento
                slider.appendChild(propSlider.primerSlide);
                // Elimina el movimiento del slide del primero al último (margin-left: -100%)
                slider.style.transition = 'unset';
                // Después de la animación, movemos el primer slide al final y restablecemos la posición.
                slider.style.marginLeft = '0%';
            }, 1000);
        }
    }

    // Esto hace iniciar al método Inicio
    metSlider.inicio();

}())