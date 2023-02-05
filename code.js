const button = document.getElementById('search-button');
const sidebar = document.querySelector('.transition');

button.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
