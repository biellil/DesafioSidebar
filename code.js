const button = document.getElementById('menu-icon');
const sidebar = document.querySelector('.transition');
const dashboard = document.querySelector(".tela");
const outBar =  document.querySelector9('.outBar')

button.addEventListener('click', () => {
  
  sidebar.classList.toggle('active');
  dashboard.classList.toggle('active');
  outBar.classList.toggle('active')

});