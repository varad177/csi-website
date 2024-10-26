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
    pin: ".member-container"
  },
});