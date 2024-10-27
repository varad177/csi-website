
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
gsap.utils.toArray('#aboutheading').forEach((heading) => {
    // Create a timeline for each heading
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: heading, // Element that triggers the animation
            start: 'top 80%', // When the top of the heading hits 80% of the viewport height
            end: 'bottom 20%', // When the bottom of the heading hits 20% of the viewport height
            scrub: true, 
            scroller: "body",
        }
    });

    // Add animation to the timeline
    tl.to(heading, {
        opacity: 1, // Fade in
        y: 0, // Move to original position
        duration: 1 // Animation duration
    });
});


// Get elements
const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

// GSAP timeline for sidebar animation
const tl = gsap.timeline({ paused: true, reversed: true });

tl.to(overlay, {
  duration: 0.1,
  opacity: 1,
  pointerEvents: "auto",
  ease: "power2.out",
})
.to(sidebar, {
  duration: 0.2,
  x: "100vw", // Slide sidebar to cover the full width
  ease: "power2.out",
}, "<") // Start at the same time as overlay

.from(".nav-link", {
  duration: 0.1,
  opacity: 0,
  x: -50,
  stagger: 0.1,
});

// Open and close functions
openBtn.addEventListener("click", () => {
  tl.reversed() ? tl.play() : tl.reverse();
});

closeBtn.addEventListener("click", () => {
  tl.reversed() ? tl.play() : tl.reverse();
});

// Close sidebar when overlay is clicked
overlay.addEventListener("click", () => {
  if (!tl.reversed()) tl.reverse();
});
