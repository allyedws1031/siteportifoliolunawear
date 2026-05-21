const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

const links = document.querySelectorAll('.nav-menu a');

links.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});
