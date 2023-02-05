const button = document.getElementById('menu-icon');
const sidebar = document.querySelector('.transition');

button.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
