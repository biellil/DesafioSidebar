const button = document.getElementById('menu-icon');
const sidebar = document.querySelector('.transition');
const dashboard = document.querySelector(".tela");

button.addEventListener('click', () => {
  
  sidebar.classList.toggle('active');
  dashboard.classList.toggle('active');

});