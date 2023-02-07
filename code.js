const button = document.getElementById('menu-icon');
const sidebar = document.querySelector('.transition');
const dashboard = document.querySelector(".tela");
const outtBar =  document.querySelector('.outt')
const outBar =  document.querySelector('.out')



button.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  dashboard.classList.toggle('active');
  outtBar.classList.toggle('active')
  outBar.classList.toggle('active')
 
});



