const menuEmail = document.querySelector('.navbar-email');
const deskmenu = document.querySelector('.desk-menu');

menuEmail.addEventListener('click', toggledeskmenu );

function toggledeskmenu(){
deskmenu.classList.toggle('inactive');
}