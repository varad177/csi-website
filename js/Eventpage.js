document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let counter = 0;
    const size = carouselItems[0].clientWidth + 30; // Adjust for margins

    // Function to slide to next event
    function nextSlide() {
        if (counter >= carouselItems.length - 1) {
            counter = 0;
        } else {
            counter++;
        }
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }

    // Function to slide to previous event
    function prevSlide() {
        if (counter <= 0) {
            counter = carouselItems.length - 1;
        } else {
            counter--;
        }
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }

    // Automatically slide every 5 seconds
    setInterval(nextSlide, 5000);

    // GSAP animation for hover effect
    gsap.from(".carousel-item", {
        scale: 0.95,
        duration: 1,
        opacity: 0,
        stagger: 0.2
    });

    // Event listeners for buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
});
