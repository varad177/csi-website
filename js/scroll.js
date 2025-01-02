
// Select the button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show button when scrolling down
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

// Smooth scroll to top using GSAP
scrollToTopBtn.addEventListener('click', () => {
    gsap.to(window, { duration: 0.5, scrollTo: { y: 0 }, ease: 'power2.inOut' });
});

