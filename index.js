// Menu toggle

const coveringPanel = document.querySelector(".covering-panel");
const slideInMenu = document.querySelector(".menu-items");

const hamburgerMenuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".menu-item-button");

hamburgerMenuButton.addEventListener("click", showSlideInMenu);
closeButton.addEventListener("click", hideSlideInMenu);

function showSlideInMenu()
{
    coveringPanel.classList.toggle('shadow');
    coveringPanel.classList.toggle('move');
    slideInMenu.classList.toggle('show');

}

function hideSlideInMenu()
{
    coveringPanel.classList.toggle('shadow');
    slideInMenu.classList.toggle('show');

    setTimeout(() => {coveringPanel.classList.toggle('move');}, 500);
}

window.addEventListener("resize", defaultMenuSettings)

function defaultMenuSettings()
{
    let windowSize = window.innerWidth;

    if (windowSize > 720){
        coveringPanel.classList.remove('shadow');
        coveringPanel.classList.remove('move');
        slideInMenu.classList.remove('show');
    }
}
// Image display - mobile

const previousButton = document.querySelector(".button-previous");
const nextButton = document.querySelector(".button-next");
const currentImg = document.querySelector(".current-img");

const images = [
    'Sources/Images/image-product-1.jpg',
    'Sources/Images/image-product-2.jpg',
    'Sources/Images/image-product-3.jpg',
    'Sources/Images/image-product-4.jpg',
];

const alts = [
    'First image of Fall Limited Edition Sneakers',
    'Second image of Fall Limited Edition Sneakers',
    'Third image of Fall Limited Edition Sneakers',
    'Fourth image of Fall Limited Edition Sneakers',
]

let counter = 0;

previousButton.addEventListener("click", previous);
nextButton.addEventListener("click", next);

function previous() {
    counter--;
    if (counter < 0) {
    counter = images.length - 1;
    }
    updateDisplayImage();
}

function next() {
    counter++;
    if (counter == images.length) {
    counter = 0;
    }
    updateDisplayImage();
}

function updateDisplayImage() {
    currentImg.style.opacity = 0;
    setTimeout(function() {
        currentImg.src = images[counter];
        currentImg.alt = alts[counter];
        currentImg.style.opacity = 1;
        }, 400);
}

// Image display - desktop

const firstThumbnailButton = document.querySelectorAll(".thumbnail-button")[0];
const secondThumbnailButton = document.querySelectorAll(".thumbnail-button")[1];
const thirdThumbnailButton = document.querySelectorAll(".thumbnail-button")[2];
const fourthThumbnailButton = document.querySelectorAll(".thumbnail-button")[3];

firstThumbnailButton.addEventListener("click", showImg.bind(null, 0));
secondThumbnailButton.addEventListener("click", showImg.bind(null, 1));
thirdThumbnailButton.addEventListener("click", showImg.bind(null, 2));
fourthThumbnailButton.addEventListener("click", showImg.bind(null, 3));

function showImg(index) {
    counter = index;
    currentImg.style.opacity = 0;
    setTimeout(function() {
        currentImg.src = images[index];
        currentImg.alt = alts[index];
        currentImg.style.opacity = 1;
        }, 400);
}

// Cart update

const itemsInCart = document.querySelector(".items-in-cart");
const itemsSelected = document.querySelector(".number-of-items");

const totalAmount = document.querySelector(".total-amount");
const totalPrice = document.querySelector(".total-price");
const deleteButton = document.querySelector(".delete-button");

const minusButton = document.querySelector(".minus-button");
const plusButton = document.querySelector(".plus-button");
const addToCartButton = document.querySelector(".cart-button");

let current = parseInt(itemsInCart.textContent, 10);
const emptyCartInfo = document.querySelector(".empty-cart-info");
const cartInfo = document.querySelector(".cart-info");
const checkoutButton = document.querySelector(".checkout-button");

if(current == 0) {
    emptyCartInfo.style.display = "block";
    cartInfo.style.display = "none";
    checkoutButton.style.display = "none";
}
else {
    emptyCartInfo.style.display = "none";
    cartInfo.style.display = "flex";
    checkoutButton.style.display = "flex";
}

minusButton.addEventListener("click", decrementValue);
plusButton.addEventListener("click", incrementValue);
addToCartButton.addEventListener("click", updateCart);
deleteButton.addEventListener("click", removeSingleItem)

function updateCart() {
    let current = parseInt(itemsInCart.textContent, 10);
    let value = parseInt(itemsSelected.textContent, 10);
    current += value;
    itemsInCart.textContent = current;
    totalAmount.textContent = current;
    let price = parseInt(totalAmount.textContent, 10) * 125
    totalPrice.textContent = '$' + price.toFixed(2);
    
    if (current == 0) {
        itemsInCart.style.visibility = 'hidden';
        emptyCartInfo.style.display = "block";
        cartInfo.style.display = "none";
        checkoutButton.style.display = "none";
    }
    else {
        itemsInCart.style.visibility = 'visible';
        itemsSelected.textContent = 0;
        emptyCartInfo.style.display = "none";
        cartInfo.style.display = "flex";
        checkoutButton.style.display = "flex";
    }
}

function removeSingleItem() {
    let value = parseInt(itemsInCart.textContent, 10);
    if(value != 0) {
        value--;
        itemsInCart.textContent = value;
        updateCart();
    }
}

function decrementValue() {
    let value = parseInt(itemsSelected.textContent, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    if (value < 0) {
        value = 0;
    }
    itemsSelected.textContent = value;
}

function incrementValue() {
    let value = parseInt(itemsSelected.textContent, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    itemsSelected.textContent = value;
}

// Cart content

const cartContentButton = document.querySelector(".nav-cart-button");
const cartContent = document.querySelector(".cart-content-container");

cartContentButton.addEventListener("click", toggleCartContent);

function toggleCartContent() {
    if(cartContent.classList.contains('show')) {
        cartContent.classList.toggle('show');
        setTimeout(() => {cartContent.classList.toggle('appear');}, 500);
    }
    else {
        cartContent.classList.toggle('appear');
        setTimeout(() => {cartContent.classList.toggle('show');}, 0);
    }
}
