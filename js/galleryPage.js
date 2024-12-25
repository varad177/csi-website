const button = document.querySelector(".toggle-gallery");
const hiddenItems = document.querySelectorAll(".gallery-item.hidden");

let isExpanded = false;

button.addEventListener("click", function () {
  if (isExpanded) {
    // Collapse the gallery
    hiddenItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("hidden");
      }, index * 100); // Staggered animation
    });
    button.textContent = "See More";
  } else {
    // Expand the gallery
    hiddenItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.remove("hidden");
      }, index * 100); // Staggered animation
    });
    button.textContent = "See Less";
  }

  isExpanded = !isExpanded;
});
