
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
gsap.from('.content .typing-container', 1, {
  delay: 2.5,
  opacity: 0,

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
gsap.to('.one .bg', 1, {
  ease: Expo.easeOut,
  delay: 6,
  height: '0%'
})
gsap.from('.one img', 1, {
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


// // Register ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);


// const sectionIds = ["about", "pillars", "foundation", "gallery", "swiper-section", "reachus"];

// // Loop through each section and apply the animation
// sectionIds.forEach((id) => {
//   gsap.from(`#${id}`, {
//     opacity: 0, // Start with opacity 0
//     y: 50, // Start slightly below
//     duration: 2, // Animation duration
//     ease: "power2.out", // Smooth easing
//     scrollTrigger: {
//       trigger: `#${id}`, // Element that triggers the animation
//       start: "top 80%", // Start animation when the top of the section is 80% down the viewport
//       toggleActions: "play none none none", // Play animation once
//     },
//   });
// });


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
const navLinks = document.querySelectorAll(".nav-link"); // Select all nav links

// GSAP timeline for sidebar animation
const tl = gsap.timeline({ paused: true, reversed: true });

tl.to(overlay, {
  duration: 0.1,
  opacity: 1,
  pointerEvents: "auto",
  ease: "power2.out",
})
  .to(
    sidebar,
    {
      duration: 0.2,
      x: "100vw", // Slide sidebar to cover the full width
      ease: "power2.out",
    },
    "<" // Start at the same time as overlay
  )
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

// Close sidebar when any nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    if (!tl.reversed()) tl.reverse();
  });
});



// Initialize GSAP

const faceElements = document.querySelectorAll('.face-effect');

faceElements.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      scale: 1.1,
      rotation: 10,
      duration: 0.3,
      ease: 'power1.out'
    });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: 'power1.out'
    });
  });
});

const texts = ["CSI-CATT DMCE"];
const typingSpeed = 100; // Milliseconds per character
const delayBetweenTexts = 1000; // Milliseconds between each text

let textIndex = 0;
let charIndex = 0;
const textElement = document.getElementById('text');

function typeText() {
  if (charIndex < texts[textIndex].length) {
    textElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(deleteText, delayBetweenTexts);
  }
}

function deleteText() {
  if (charIndex > 0) {
    textElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, typingSpeed);
  } else {
    textIndex = (textIndex + 1) % texts.length; // Loop back to first text
    setTimeout(typeText, delayBetweenTexts);
  }
}

typeText(); // Start the typing effect
// Add event listener to manage the active class
const homelinks = document.querySelectorAll('.underline-nav');

homelinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove 'active' class from all links
    homelinks.forEach(link => link.classList.remove('active'));
    
    // Add 'active' class to the clicked link
    this.classList.add('active');
  });
});




// Function to open the modal and set the content dynamically
function openModal(title, imgSrc) {
  var modal = document.getElementById('modal');
  var modalTitle = document.getElementById('modal-title');
  var modalImage = document.getElementById('momentImg');

  // Set the title and image source for the modal
  modalTitle.textContent = title;
  modalImage.src = imgSrc;

  // Display the modal
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Close the modal if the user clicks anywhere outside of the modal
window.onclick = function(event) {
  var modal = document.getElementById('modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.secondary-navbar a');
  
  let currentSection = null;

  // Check which section is near the top of the viewport
  sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      // If the top of the section is within the top 10% of the viewport height, mark it as current
      if (rect.top <= window.innerHeight * 0.1 && rect.bottom >= 0) {
          currentSection = section.getAttribute('id');
      }
  });

  // Update active link based on the current section
  navLinks.forEach((link) => {
      const linkTarget = link.getAttribute('href').substring(1); // Remove '#' from href
    
      
      if (currentSection === linkTarget) {
          link.classList.add('active');
      } else {
          link.classList.remove('active');
      }
  });
});
