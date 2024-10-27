
gsap.from('.loader h1', 2, {
  x: 2000
}, 'start')
gsap.from('.loader h2', 2, {
  x: -1200
}, 'start')
gsap.from('.logo span', 1, {
  delay: 2,
  scale: 0,
  ease: ' ease.out'
})
gsap.from('nav ul li', 1, {
  delay: 2,
  y: -250,
  ease: Expo.easeOut,
  stagger: .4
})
gsap.from('.h1 h1', 1.4, {
  delay: 2,
  y: 250,
  skewY: 20,
  stagger: .8
})
gsap.from('.content p', 1, {
  delay: 2.5,
  y: -30,
  opacity: 0
})
gsap.from('.content > a', 1, {
  ease: Expo.easeOut,
  delay: 3.2,
  x: innerWidth * -1,
  opacity: 0
})
gsap.from('.social ul li a', 1, {
  ease: Expo.easeOut,
  delay: 3.6,
  y: 250,
  opacity: 0,
  stagger: 0.5
})
gsap.from('.one', 1, {
  delay: 5,
  x: innerWidth * 1,
})
gsap.from('.two', 1, {
  delay: 5.5,
  y: -100,
  opacity: 0
})
gsap.from('.three', 1, {
  delay: 5.9,
  y: 100,
  opacity: 0
})
gsap.to('.one .bg', 1, {
  ease: Expo.easeOut,
  delay: 6,
  height: '0%'
})
gsap.from('.one img', 1, {
  delay: 6.2,
  scale: 1.5
})
gsap.to('.two .bg2', 1, {
  ease: Expo.easeOut,
  delay: 6,
  height: '0%'
})
gsap.from('.two img', 1, {
  delay: 6.2,
  scale: 1.5
})
gsap.to('.three .bg3', 1, {
  ease: Expo.easeOut,
  delay: 6,
  height: '0%'
})
gsap.from('.three img', 1, {
  delay: 6.2,
  scale: 1.5
})

gsap.to("#name-div h1", {
  transform: "translateX(calc(-100% - 2vw - 4px))",
  scrollTrigger: {
    trigger: "#name-div h1",
    scroller: "body",
  //   markers:true,
    scrub: 0.7
  }
})


// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animation for each heading
gsap.utils.toArray('.heading').forEach((heading) => {
    // Create a timeline for each heading
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: heading, // Element that triggers the animation
            start: 'top 80%', // When the top of the heading hits 80% of the viewport height
            end: 'bottom 20%', // When the bottom of the heading hits 20% of the viewport height
            scrub: true, // Smooth scrubbing
            // markers: true // Optional: Add markers for debugging
        }
    });

    // Add animation to the timeline
    tl.to(heading, {
        opacity: 1, // Fade in
        y: 0, // Move to original position
        duration: 1 // Animation duration
    });
});
