// Menu toggle

const coveringPanel = document.querySelector(".covering-panel");
const slideInMenu = document.querySelector(".menu-items");

const hamburgerMenuButton = document.querySelector(".menu-button");
const closeButton = document.querySelector(".menu-item-button");

hamburgerMenuButton.addEventListener("click", toggleSlideInMenu);
closeButton.addEventListener("click", toggleSlideInMenu);

function toggleSlideInMenu()
{
    coveringPanel.classList.toggle('shadow');
    slideInMenu.classList.toggle('show');
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

const minusButton = document.querySelector(".minus-button");
const plusButton = document.querySelector(".plus-button");
const addToCartButton = document.querySelector(".cart-button");

minusButton.addEventListener("click", decrementValue);
plusButton.addEventListener("click", incrementValue);
addToCartButton.addEventListener("click", updateCart);

function updateCart() {
    let current = parseInt(itemsInCart.textContent, 10);
    let value = parseInt(itemsSelected.textContent, 10);
    current += value;
    itemsInCart.textContent = current;
    
    if (current == 0) {
        itemsInCart.style.visibility = 'hidden';
    }
    else {
        itemsInCart.style.visibility = 'visible';
        itemsSelected.textContent = 0;
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