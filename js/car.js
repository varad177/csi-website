const element = document.getElementsByClassName('fd');

// Function to handle scroll animations
const handleScroll = () => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Check if the element is in view
    if (elementPosition < windowHeight && elementPosition > 0) {
        // Element is in view - fade in
        gsap.to(element, { opacity: 1, duration: 0.5 });
    } else {
        // Element is out of view - fade out
        gsap.to(element, { opacity: 0, duration: 0.5 });
    }
};

// Listen for scroll events
window.addEventListener('scroll', handleScroll);