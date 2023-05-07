const menuEmail = document.querySelector('.navbar-email');
const deskmenu = document.querySelector('.desk-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggledeskmenu );
menuHamIcon.addEventListener('click', toggleMobileMenu );

function toggledeskmenu(){
deskmenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}