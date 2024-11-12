let currentSlide = 0; // Índice de la diapositiva actual
const slides = document.querySelectorAll('.carrusel-item');
const totalSlides = slides.length;

// Configura el tiempo para cambiar de diapositiva automáticamente (en milisegundos)
const intervalTime = 3000;

// Mover a la siguiente diapositiva automáticamente
function autoMoveSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Reinicia al primer slide si es el último
    updateCarousel();
}

// Actualiza el carrusel a la posición correcta
function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    const newTransformValue = -currentSlide * slideWidth;
    document.querySelector('.carrusel-images').style.transform = `translateX(${newTransformValue}px)`;
}

// Inicia el movimiento automático
let autoSlideInterval = setInterval(autoMoveSlide, intervalTime);

// Detener el movimiento automático al interactuar con los botones
function moveSlide(step) {
    clearInterval(autoSlideInterval); // Detén el temporizador al hacer clic
    currentSlide += step;

    // Asegurarse de que el índice de las diapositivas esté dentro de los límites
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Ir al último
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Ir al primero
    }

    updateCarousel();

    // Reinicia el temporizador después de la interacción
    autoSlideInterval = setInterval(autoMoveSlide, intervalTime);
}

