const elements = [
  { id: 'logomenu-icon', text: 'p0', display: 'block' },
  { id: 'search-icon', text: '.search-icon p', display: 'block' },
  { id: 'git-icon', text: '#git-icon p1', display: 'block' },
  { id: 'pet-icon', text: '#pet-icon p2', display: 'block' },
  { id: 'user-icon', text: '#user-icon p3', display: 'block' },
  { id: 'vet-icon', text: '#vet-icon p4', display: 'block' },
  { id: 'settings-icon', text: '#settings-icon p5', display: 'block' },
  { id: 'outDown', text: '#outDown p6', display: 'block' },
  { id: 'outDown', text: '#outDown p7', display: 'block' },
  { id: 'outDown', text: '#outDown img', display: 'block' }
];

const button = document.getElementById('logomenu-icon');
const sidebar = document.querySelector('.transition');
const dashboard = document.querySelector(".tela");
const outtBar =  document.querySelector('.outt');
const outBar =  document.querySelector('.out');
const logoSearch =  document.querySelector('.logoSearch-icon');
const Searchicon =  document.querySelector('.search-icon');
const menuIcon = document.querySelector('.menuIcon');

button.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  dashboard.classList.toggle('active');
  outtBar.classList.toggle('active');
  outBar.classList.toggle('active');
  logoSearch.classList.toggle('active');
  Searchicon.classList.toggle('active');
  menuIcon.classList.toggle('active');
 
  elements.forEach(element => {
    const text = document.querySelector(element.text);
    text.style.display = text.style.display === element.display ? 'none' : element.display;
  });
});
