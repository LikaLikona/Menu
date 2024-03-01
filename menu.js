import data from './data.js';
console.log(data)



const productList = document.getElementById("productList");

const productsByCategory = {};

data.forEach(item => {
  if (!productsByCategory[item.categories]) {
    productsByCategory[item.categories] = [];
  }
  productsByCategory[item.categories].push(item);
});

Object.entries(productsByCategory).forEach(([category, products]) => {
  const categoryHeader = document.createElement("h2");
  categoryHeader.textContent = category;

  productList.appendChild(categoryHeader);

  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("card");


    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.name;
    image.classList.add("card-img-top");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = product.name;

    const description = document.createElement("p");
    description.classList.add("card-text");
    description.textContent = product.dsc;

    const price = document.createElement("p");
    price.classList.add("card-text");
    price.textContent = `GEL${product.price}`;

    const rate=document.createElement("p");
    rate.classList.add("card-text");
    rate.textContent = `${"☆".repeat(product.rate)}`;

    cardBody.appendChild(image);
    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(price);
    cardBody.appendChild(rate);

    card.appendChild(cardBody);

    productList.appendChild(card);

  
  });

});





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



// const topList= document.getElementById("topList");
// const firstItems = {};

// data.forEach(item => {
//   if (!firstItems[item.categories]) {
//     firstItems[item.categories] = item;
//   }
// });

// Object.values(firstItems).forEach(item => {
  
//   const card = document.createElement("div");
//   card.classList.add("card");

  
//   const image = document.createElement("img");
//   image.src = item.image;
//   image.alt = item.name;
//   image.classList.add("card-img-top");


//   const cardBody = document.createElement("div");
//   cardBody.classList.add("card-body");

 
//   const title = document.createElement("h5");
//   title.classList.add("card-title");
//   title.textContent = item.name;


//   const description = document.createElement("p");
//   description.classList.add("card-text");
//   description.textContent = item.dsc;

//   const price = document.createElement("p");
//   price.classList.add("card-text");
//   price.textContent = `$${item.price}`;

//   cardBody.appendChild(image);
//   cardBody.appendChild(title);
//   cardBody.appendChild(description);
//   cardBody.appendChild(price);

//   card.appendChild(cardBody);

//   topList.appendChild(card);
// });



// const productList = document.getElementById("productList");

// data.forEach((data) => {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     card.classList.add("col-lg-8");
//     card.classList.add("col-md-4");
//     card.classList.add("col-sm-2");
//     card.innerHTML = `
//         <img src="${data.image}" class="card-img-top width-20" alt="${data.name}">
//         <div class="card-body">
//             <h4 class="card-title">${data.name}</h4>
//             <p class="card-text">${data.dsc}</p>
//             <p class="card-text">${"☆".repeat(data.rate)}</p>
//             <h4 class="card-title">GEL${data.price}</h4>
//         </div>
//     `;
//     productList.appendChild(card);
    
// });

// const renderMenu = (data) => {
//   const categories = [...new Set(data.map(item => item.categories))];

//   categories.forEach(category => {
//     const categoryItems = data.filter(item => item.categories === category);

//     console.log(`Category: ${category}`);
//     categoryItems.forEach(item => {
//       console.log(`Name: ${item.name}, Description: ${item.dsc}, Price: $${item.price}, Rate: ${item.rate}`);
//     });
//   });
// };

// renderMenu();


// const productList = document.getElementById("productList")
// data.map((products =>{
//     const card =document.createElement("div")
//     card.classList.add("card")
//     card.classList.add("col-3")
//     card.innerHTML = `
//     ${
//         data.image.map((image) =>{
//             return`<img src="${image.url} class="card-img-top width-20 " alt="${image.alt}">`
//         }) 
//     }
//     <div class="card-body">
//        <h4 class="card-title">${data.name}</h4>

//     <p class="card-text>
//     ${data.dsc}
//     </p>
//     <div class="buy d-flex justify-content-between align-items-center">
//         <div class="price text-success"><h5 class="mt-4">$${data.price}</h5></div>
//     </div>
//     `
//     productList.appendChild(card)
// }))


// async function fetchData() {
//     try {
//       const response = await fetch('./data.js');
//       const data = await response.json();
  
//       const container = document.getElementById("productList");
  
//       data.forEach(data => {
      
//         const card = document.createElement("div");
//         card.classList.add("card");
  
//         const img = document.createElement("img");
//         img.src = data.img;
//         img.alt = data.name;
  
//         const heading = document.createElement("h2");
//         heading.textContent = data.name;
  
       
//         const paragraph = document.createElement("p");
//         paragraph.textContent = data.dsc;
  
//         const price = document.createElement("span");
//         price.textContent = `$${data.price}`;

//         card.appendChild(img);
//         card.appendChild(heading);
//         card.appendChild(paragraph);
//         card.appendChild(price);

//         productList.appendChild(card);
//       });
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }
  
//   fetchData();
  




