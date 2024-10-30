document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('mouseover', () => {
      const description = item.getAttribute('data-description');
      const descriptionBox = document.getElementById('description');
      descriptionBox.textContent = description;

      // Position the description box at the bottom of the image
      const rect = item.getBoundingClientRect();
      descriptionBox.style.left = `${rect.left}px`;
      descriptionBox.style.top = `${rect.bottom + window.scrollY}px`;
      descriptionBox.style.width = `${rect.width}px`;

      // GSAP animation for description
      gsap.to(descriptionBox, { opacity: 1, duration: 0.3 });
  });

  item.addEventListener('mouseout', () => {
      const descriptionBox = document.getElementById('description');
      gsap.to(descriptionBox, { opacity: 0, duration: 0.3 });
  });
});
