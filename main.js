const menuEmail = document.querySelector('.navbar-email');
const deskmenu = document.querySelector('.desk-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggledeskmenu );
menuHamIcon.addEventListener('click', toggleMobileMenu );
menuCarritoIcon.addEventListener('click', toggleCarritoAside );

function toggledeskmenu(){
    const isAsideClosed =aside.classList.contains('inactive');
      
    if (!isAsideClosed){
        aside.classList.add('inactive');
    }
deskmenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed =aside.classList.contains('inactive');
      
if (!isAsideClosed){
    aside.classList.add('inactive');
}
mobileMenu.classList.toggle('inactive');
}
function toggleCarritoAside(){
    const isMobileMenuClosed =mobileMenu.classList.contains('inactive');
    const isdeskmenuClosed =deskmenu.classList.contains('inactive');
      
    if (!isdeskmenuClosed){
        deskmenu.classList.add('inactive');
    }  

if (!isMobileMenuClosed){
    mobileMenu.classList.add('inactive');
}
 aside.classList.toggle('inactive');
   }
