import data from './data';
console.log(data)

const productList = document.getElementById("productList");

data.forEach((data) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("col-lg-8");
    card.classList.add("col-md-4");
    card.classList.add("col-sm-2");
    card.innerHTML = `
        <img src="${data.image}" class="card-img-top width-20" alt="${data.name}">
        <div class="card-body">
            <h4 class="card-title">${data.name}</h4>
            <p class="card-text">${data.dsc}</p>
            <div class="buy d-flex justify-content-between align-items-center">
                <div class="price text-success"><h5 class="mt-4">$${data.price}</h5></div>
            </div>
        </div>
    `;
    productList.appendChild(card);
});

const renderMenu = () => {
    const categories = [...new Set(data.map(item => item.categories))];
  
    categories.forEach(category => {
      const categoryItems = data.filter(item => item.categories === category);
  
      console.log(`Category: ${category}`);
      categoryItems.forEach(item => {
        console.log(`Name: ${item.name}, Description: ${item.dsc}, Price: $${item.price}`);
      });
    });
  };
  
  renderMenu();



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
  

  