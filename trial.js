// JavaScript to handle the sliding and looping effect
document.addEventListener("DOMContentLoaded", () => {
    const galleryWrapper = document.querySelector(".gallery-wrapper");
  
    // Clone the first gallery item to create an infinite looping effect
    const firstItem = galleryWrapper.firstElementChild.cloneNode(true);
    galleryWrapper.appendChild(firstItem);
  
    // Set the animation duration to match the CSS keyframes (10s for example)
    const animationDuration = 10;
  
    // Function to update the animation dynamically
    const updateAnimation = () => {
      galleryWrapper.style.animation = `slide-left ${animationDuration}s linear infinite`;
    };
  
    // Ensure smooth transition and looping when the first image comes back
    galleryWrapper.addEventListener("animationiteration", () => {
      // Once the first iteration is complete, reset to the original position
      galleryWrapper.style.transition = "none"; // Disable transition during reset
      galleryWrapper.style.transform = "translateX(0)";
      
      // Trigger a small delay before the next animation begins
      setTimeout(() => {
        galleryWrapper.style.transition = "transform 1s ease"; // Re-enable smooth transition
        updateAnimation(); // Restart the sliding animation
      }, 100);
    });
  
    // Initialize the animation
    updateAnimation();
  });
  