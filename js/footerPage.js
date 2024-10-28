// GSAP Animation for footer
window.onload = () => {
    gsap.fromTo(".footer-title", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
    gsap.fromTo(".social-links", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 });
    gsap.fromTo(".footer-text", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 1 });
  };
  