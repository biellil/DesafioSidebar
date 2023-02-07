const button = document.getElementById('menu-icon');
const searchIcon = document.getElementById('search-icon');
const sidebar = document.querySelector('.transition');
const dashboard = document.querySelector(".tela");
const outtBar =  document.querySelector('.outt');
const outBar =  document.querySelector('.out');
const logoSearch =  document.querySelector('.logoSearch-icon');
const Searchicon =  document.querySelector('.search-icon')

button.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  dashboard.classList.toggle('active');
  outtBar.classList.toggle('active');
  outBar.classList.toggle('active');
  logoSearch.classList.toggle('active');
  Searchicon.classList.toggle('active');
 
  const text0 = document.querySelector('#menu-icon p0');
  text0.style.display = text0.style.display === 'block' ? 'none' : 'block';

  const text = document.querySelector('.search-icon p');
  text.style.display = text.style.display === 'block' ? 'none' : 'block';
  const text1 = document.querySelector('#git-icon p1');
  text1.style.display = text1.style.display === 'block' ? 'none' : 'block';
  const text2 = document.querySelector('#pet-icon p2');
  text2.style.display = text2.style.display === 'block' ? 'none' : 'block';
  const text3 = document.querySelector('#user-icon p3');
  text3.style.display = text3.style.display === 'block' ? 'none' : 'block';
  const text4 = document.querySelector('#vet-icon p4');
  text4.style.display = text4.style.display === 'block' ? 'none' : 'block';
  const text5 = document.querySelector('#settings-icon p5');
  text5.style.display = text5.style.display === 'block' ? 'none' : 'block';
  const text6 = document.querySelector('#outDown p6');
  text6.style.display = text6.style.display === 'block' ? 'none' : 'block';
  const text7 = document.querySelector('#outDown p7');
  text7.style.display = text7.style.display === 'block' ? 'none' : 'block';
  const text8 = document.querySelector('#outDown img');
  text8.style.display = text8.style.display === 'block' ? 'none' : 'block';


});

