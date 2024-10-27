gsap.from("#galleryheading", {
  opacity: 0, // Fade in
  y: 50, // Start 50px below its original position
  duration: 1, // Animation duration

  scrollTrigger: {
    trigger: "#galleryheading", // Element that triggers the animation
    start: "top 80%", // When the top of the heading hits 80% of the viewport height
    end: "bottom 20%", // When the bottom of the heading hits 20% of the viewport height
    scrub: true, // Smooth animation as you scroll
    scroller: "body", // Specify the scrolling container
  },
});
