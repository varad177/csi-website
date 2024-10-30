// Importing the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Select all elements with the fade-effect class
const fadeElements = document.querySelectorAll('.fade-effect');

// Function to trigger animations when elements come into view
fadeElements.forEach((element) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 30 }, // Initial state (hidden and slightly down)
    {
      opacity: 1, // Final state (visible)
      y: 0, // Final position (original)
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%', // Trigger animation when the top of the element is 80% from the top of the viewport
        toggleActions: 'play none none reverse', // Play animation on enter, reverse on exit
        markers: false // Set to true to see markers for debugging
      }
    }
  );
});
