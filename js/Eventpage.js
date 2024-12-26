let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const carouselWrapper = document.querySelector('.carousel-wrapper');
    gsap.to(carouselWrapper, { x: -currentIndex * 100 + '%', duration: 0.5 });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto Slide
setInterval(nextSlide, 5000);