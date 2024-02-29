import product from './data.js';
console.log(product)

const productList = document.getElementById("productList")
data.map((products => {
     const card = document.createElement("div")
     card.classList.add("card")
     card.classList.add("col-3")
     card.innerHTML = `
     ${
        products.img.map((img)=> {
            return `<img src="${img.url}" class="card-img-top width-20 " alt="${img.alt}">`
        })
     }
     <div class="card-body">
       <h4 class="card-title">${products.name}</h4>
       <p class="card-text">
        ${products.dsc} 
       </p>
       <div class="options d-flex flex-fill">
       </div>
       <div class="buy d-flex justify-content-between align-items-center">
         <div class="price text-success"><h5 class="mt-4">$${products.price}</h5></div>
       </div>
     </div>
     `
     card.addEventListener("click" , () => {
        window.location.href = `menu.html?product=${products.id}`;
     } )
     productList.appendChild(card)
}))