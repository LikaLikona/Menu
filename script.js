

const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);


let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);


const sectionMenu = document.getElementById("section_menu");


const firstItemsByCategory = {};


data.forEach((item) => {
  if (!firstItemsByCategory[item.categories]) {
    firstItemsByCategory[item.categories] = item;
  }
});

Object.entries(firstItemsByCategory).forEach(([category, item]) => {
  const categoryDiv = document.createElement("div");
  categoryDiv.classList.add("category");

  const categoryHeader = document.createElement("h2");
  categoryHeader.classList.add("categoryHeader");
  categoryHeader.textContent = category;

  const productDiv = document.createElement("div");
  productDiv.classList.add("product");

  const productImage = document.createElement("img");
  productImage.classList.add("productImage");
  productImage.src = item.image;
  productImage.alt = item.name;

  const productName = document.createElement("h3");
  productName.classList.add("productName");
  productName.textContent = item.name;


  const productDescription = document.createElement("p");
  productDescription.classList.add("productDescription");
  productDescription.textContent = item.dsc;


  const productPrice = document.createElement("p");
  productPrice.classList.add("productPrice");
  productPrice.textContent = `$${item.price}`;

 
  productDiv.appendChild(productImage);
  productDiv.appendChild(productName);
  productDiv.appendChild(productDescription);
  productDiv.appendChild(productPrice);

  
  categoryDiv.appendChild(categoryHeader);
  categoryDiv.appendChild(productDiv);


  sectionMenu.appendChild(categoryDiv);
  
});


 import data from './data.js';
 console.log(data)