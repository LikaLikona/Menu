

const preloader = document.querySelector("[data-preload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

/**
 * HEADER & BACK TOP BTN
 */

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

/**
 * HERO SLIDER
 */

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

/**
 * auto slide
 */

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



/**
 * PARALLAX EFFECT
 */

// const parallaxItems = document.querySelectorAll("[data-parallax-item]");

// let x, y;

// window.addEventListener("mousemove", function (event) {

//   x = (event.clientX / window.innerWidth * 10) - 5;
//   y = (event.clientY / window.innerHeight * 10) - 5;

//   // reverse the number eg. 20 -> -20, -5 -> 5
//   x = x - (x * 2);
//   y = y - (y * 2);

//   for (let i = 0, len = parallaxItems.length; i < len; i++) {
//     x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
//     y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
//     parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
//   }

// });


const topList= document.getElementById("topList");
const firstItems = {};

data.forEach(item => {
  if (!firstItems[item.categories]) {
    firstItems[item.categories] = item;
  }
});

Object.values(firstItems).forEach(item => {
  
  const card = document.createElement("div");
  card.classList.add("card");

  
  const image = document.createElement("img");
  image.src = item.image;
  image.alt = item.name;
  image.classList.add("card-img-top");


  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

 
  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = item.name;


  const description = document.createElement("p");
  description.classList.add("card-text");
  description.textContent = item.dsc;

  const price = document.createElement("p");
  price.classList.add("card-text");
  price.textContent = `$${item.price}`;

  cardBody.appendChild(image);
  cardBody.appendChild(title);
  cardBody.appendChild(description);
  cardBody.appendChild(price);

  card.appendChild(cardBody);

  topList.appendChild(card);
});
