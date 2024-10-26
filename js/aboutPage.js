window.addEventListener("DOMContentLoaded", () => {
  // Left section animation
  gsap.from(".about-left", {
    scrollTrigger: {
      trigger: ".about-outer",
      start: "top 120%", // Animation starts when top of the about-outer is 80% of viewport height
      end: "bottom 80%",  
      scrub: true, // Smoothens the scroll with scrub effect
      // markers: true,
      scroller: "body",
    },
    opacity: 0,
    y: 0, // Move to original position
    duration: 0.5, // Animation duration // Duration for the animation effect
  });

  // Right section animation
  gsap.from(".about-right", {
    scrollTrigger: {
      trigger: ".about-outer",
      start: "top 120%",
      end: "bottom 80%",  
      scrub: true,
      // markers: true,
      scroller: "body",
    },
    opacity: 0, // Fade in
    y: 0, // Move to original position
    duration: 0.5, // Animation duration
  });
  gsap.to("#about", {
    backgroundColor: "#FFFFFF",  // Change to green or any color you prefer
    duration: 0.1,                 // Duration for smooth color transition
    scrollTrigger: {
      trigger: "#about",
      start: "top 90%",          // Start color change when about-outer enters viewport
      end: "bottom 80%",       // End color change when about-outer leaves viewport
      scrub: true,               // Smooth transition while scrolling
      toggleActions: "play none none none"
    }
  });
});
// Right section animation

window.addEventListener("DOMContentLoaded", () => {
  const typingText = document.querySelector(".typing-text");
  const textContent = typingText.textContent;
  typingText.textContent = ""; // Clear existing text

  // Split the text into individual spans for each character
  textContent.split("").forEach((char) => {
    const span = document.createElement("span");
    span.textContent = char;
    typingText.appendChild(span);
  });

  // GSAP ScrollTrigger typing animation
  gsap.fromTo(
    ".typing-text span",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      stagger: {
        each: 0.1,
        onComplete: () => ScrollTrigger.refresh(), // Refresh to keep timing in sync with scroll
      },
      scrollTrigger: {
        trigger: ".about-outer",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true, // Smooth typing effect on scroll
        toggleActions: "play none none none",
      },
    }
  );
});
