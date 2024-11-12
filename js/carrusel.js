let currentSlide = 0; 
const slides = document.querySelectorAll('.carrusel-item');
const totalSlides = slides.length;


const intervalTime = 3000;


function autoMoveSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; 
    updateCarousel();
}


function updateCarousel() {
    const slideWidth = slides[0].clientWidth;
    const newTransformValue = -currentSlide * slideWidth;
    document.querySelector('.carrusel-images').style.transform = `translateX(${newTransformValue}px)`;
}


let autoSlideInterval = setInterval(autoMoveSlide, intervalTime);


function moveSlide(step) {
    clearInterval(autoSlideInterval); 
    currentSlide += step;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; 
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; 
    }

    updateCarousel();

    
    autoSlideInterval = setInterval(autoMoveSlide, intervalTime);
}

