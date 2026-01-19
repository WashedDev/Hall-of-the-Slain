const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

menu.addEventListener('click', function() {
  // Toggles the 'is-active' class for the hamburger animation
  menu.classList.toggle('is-active');
  // Toggles the menu display
  menuLinks.classList.toggle('active');
});