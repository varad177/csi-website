// GSAP Animations
window.addEventListener("load", () => {
    gsap.from(".about-image img", {
      x: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    });
  
    gsap.from(".about-content", {
      x: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out",
    });
  });
  