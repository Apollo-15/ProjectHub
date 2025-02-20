let slides = document.querySelectorAll('.carousel-item');
let currentSlide = 0;

function changeSlide() {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
}

setInterval(changeSlide, 5000);