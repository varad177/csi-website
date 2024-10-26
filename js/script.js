
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

// Initialize GSAP animation for the heading when the page loads
window.addEventListener('load', () => {
  gsap.fromTo('.heading', 
    { opacity: 0, y: 50 }, 
    { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
  );
});
