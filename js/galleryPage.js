document.querySelectorAll('.gallery-item').forEach((item, index) => {
    // Scale and rotate effect for each item
    item.addEventListener('mouseenter', () => {
        gsap.to(item, {
            scale: 2,
            duration: 0.1,
            ease: "power1.out",
            zIndex: 1,
        });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item, {
            scale: 1,
            duration: 0.1,
            ease: "power1.in",
            zIndex: 0,
        });
    });

    // Only show first 6 images initially for mobile
    if (index >= 20) {
        item.classList.add('hidden'); // Hide additional images
    }
});

// Show More button functionality
const showMoreButton = document.getElementById('show-more');
showMoreButton.addEventListener('click', () => {
    document.querySelectorAll('.gallery-item.hidden').forEach((item) => {
        item.classList.remove('hidden'); // Show hidden images
    });
    showMoreButton.classList.add('hidden'); // Hide the Show More button after showing all images
});

// Show the Show More button if there are hidden images
if (document.querySelectorAll('.gallery-item.hidden').length > 0) {
    showMoreButton.classList.remove('hidden');
}

window.addEventListener("DOMContentLoaded", () => {
    // Left section animation
    gsap.from(".gallery img", {
      scrollTrigger: {
        trigger: ".gallery img",
        start: "top 90%",
        end: "top 30%",
        scrub: true,
        markers: true,
        scroller: "body",
      },
      scale: 0,
      y: 0, // Move to original position
      duration: 0.1, // Animation duration // Duration for the animation effect
    });
  });