const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselItems = document.querySelectorAll('.carousel-item');
const itemWidth = 320; // Card width (300px) + margin (20px)
let currentIndex = 0;
let autoSlideInterval;

// Function to slide to a specific index
function showSlide(index) {
    carouselWrapper.style.transition = "transform 0.5s ease-in-out";
    carouselWrapper.style.transform = `translateX(-${index * itemWidth}px)`;
}

// Function to move the first slide to the end dynamically
function loopSlides() {
    if (currentIndex === carouselItems.length - 1) {
        // Move the first slide to the end
        carouselWrapper.style.transition = "none";
        currentIndex = 0; // Reset index
        carouselWrapper.style.transform = `translateX(0px)`;
    }
}

// Next slide function
function nextSlide() {
    if (currentIndex < carouselItems.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Reset to the first slide if at the last
    }
    showSlide(currentIndex);
}

// Previous slide function
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = carouselItems.length - 1; // Go to the last slide if at the first
    }
    showSlide(currentIndex);
}

// Start auto-slide
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        nextSlide();
        setTimeout(loopSlides, 500); // Adjust position after transition
    }, 3000);
}

// Stop auto-slide
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Event listeners
document.querySelector('.carousel').addEventListener('mouseover', stopAutoSlide);
document.querySelector('.carousel').addEventListener('mouseout', startAutoSlide);

// Initialize carousel
startAutoSlide();
showSlide(currentIndex);
