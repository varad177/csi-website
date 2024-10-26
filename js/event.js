var nextBtn = document.querySelector('.next'),
    prevBtn = document.querySelector('.prev'),
    carousel = document.querySelector('.carousel'),
    list = document.querySelector('.list'),
    item = document.querySelectorAll('.item'),
    runningTime = document.querySelector('.carousel .timeRunning')

let timeRunning = 3000
let timeAutoNext = 7000

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('prev')
}

let runTimeOut

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext)

function resetTimeAnimation() {
    runningTime.style.animation = 'none'
    runningTime.offsetHeight /* trigger reflow */
    runningTime.style.animation = null
    runningTime.style.animation = 'runningTime 7s linear 1 forwards'
}

function showSlider(type) {
    let sliderItemsDom = list.querySelectorAll('.carousel .list .item')
    if(type === 'next'){
        list.appendChild(sliderItemsDom[0])
        carousel.classList.add('next')
    } else{
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1])
        carousel.classList.add('prev')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout( () => {
        carousel.classList.remove('next')
        carousel.classList.remove('prev')
    }, timeRunning)

    clearTimeout(runNextAuto)
    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation()
}

resetTimeAnimation()

// var carousel = document.querySelector(".carousel"),
//   list = document.querySelector(".list"),
//   item = document.querySelectorAll(".item"),
//   runningTime = document.querySelector(".carousel .timeRunning");

// let timeRunning = 3000;
// let timeAutoNext = 7000;
// let currentIndex = 0; // Track the current index of the item displayed

// // Set up the scroll event listener
// window.addEventListener("wheel", function (event) {
//   if (event.deltaY > 0) {
//     showSlider("next");
//   } else {
//     showSlider("prev");
//   }
// });

// // Handle touch scrolling on mobile devices
// let touchStartX = 0;

// carousel.addEventListener("touchstart", function (event) {
//   touchStartX = event.touches[0].clientX; // Store the initial touch position
// });

// carousel.addEventListener("touchmove", function (event) {
//   const touchEndX = event.touches[0].clientX;
//   if (touchEndX < touchStartX) {
//     showSlider("next"); // Swipe left to go to the next slide
//   } else if (touchEndX > touchStartX) {
//     showSlider("prev"); // Swipe right to go to the previous slide
//   }
// });

// // Timer to automatically move to the next slide
// let runNextAuto = setTimeout(() => {
//   showSlider("next");
// }, timeAutoNext);

// function resetTimeAnimation() {
//   runningTime.style.animation = "none";
//   runningTime.offsetHeight; // Trigger reflow
//   runningTime.style.animation = null;
//   runningTime.style.animation = "runningTime 7s linear 1 forwards";
// }

// function showSlider(type) {
//   let sliderItemsDom = list.querySelectorAll(".carousel .list .item");

//   if (type === "next") {
//     list.appendChild(sliderItemsDom[0]);
//     currentIndex = (currentIndex + 1) % sliderItemsDom.length; // Update current index
//   } else {
//     list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
//     currentIndex =
//       (currentIndex - 1 + sliderItemsDom.length) % sliderItemsDom.length; // Update current index
//   }

//   clearTimeout(runNextAuto);
//   runNextAuto = setTimeout(() => {
//     showSlider("next");
//   }, timeAutoNext);

//   resetTimeAnimation(); // Reset the running time animation
// }

// // Start the initial animation
// resetTimeAnimation();
