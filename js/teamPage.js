gsap.registerPlugin(ScrollTrigger);

let teamContainer = document.querySelector(".team-container");

gsap.to(teamContainer, {
  x: () => -(teamContainer.scrollWidth - document.documentElement.clientWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".member-container",
    start: "top top",
    end: () => "+=" + teamContainer.scrollWidth,
    scrub: true,
    pin: ".member-container",
  },
});

window.addEventListener("DOMContentLoaded", () => {
  // Left section animation
  gsap.from(".team-member", {
    scrollTrigger: {
      trigger: ".team-member",
      start: "top 80%",
      end: "top 40%",
      scrub: true,
      markers: true,
      scroller: "body",
    },
    scale: 0,
    y: 0, // Move to original position
    duration: 0.1, // Animation duration // Duration for the animation effect
  });
});
