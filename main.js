const menuEmail = document.querySelector('.navbar-email');
const deskmenu = document.querySelector('.desk-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggledeskmenu );
menuHamIcon.addEventListener('click', toggleMobileMenu );
menuCarritoIcon.addEventListener('click', toggleCarritoAside );

function toggledeskmenu(){
    const isAsideClosed =shoppingCartContainer.classList.contains('inactive');
      
    if (!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
deskmenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed =shoppingCartContainer.classList.contains('inactive');
      
if (!isAsideClosed){
    shoppingCartContainer.classList.add('inactive');
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
 shoppingCartContainer.classList.toggle('inactive');
   }

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: 'Pantalla',
    price: 130,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: 'Cpu',
    price: 190,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: 'Pantalla',
    price: 130,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
productList.push({
    name: 'Cpu',
    price: 190,
    image: "https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
});
for (product of productList){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = document.createElement('p');
   productName.innerText = product.name;
   
   productInfoDiv.appendChild(productPrice);
   productInfoDiv.appendChild(productName);

   const productInfoFigure = document.createElement('figure');
   const productImgCart = document.createElement('img');
   productImgCart.setAttribute('src', './icono/bt_add_to_cart.svg');

   productInfoFigure.appendChild(productImgCart);

   productInfo.appendChild(productInfoDiv);
   productInfo.appendChild(productInfoFigure);

   productCard.appendChild(productImg);
   productCard.appendChild(productInfo);

   cardsContainer.appendChild(productCard);
}
 
