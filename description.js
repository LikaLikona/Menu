import data from './data.js';

// const urlParams = new URLSearchParams(window.location.search);
// const productid = parseInt(urlParams.get('productid'));

// Debugging: Log the data array to check if it's being loaded correctly
console.log(data);

// const product = data.find(item => item.id === productid);


function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

let prodId = getParameterByName('id');


if (data) {

  document.head.innerHTML = `    
    <title>${data[prodId].name}</title>
    <style>
   .cont{
    width: 40%;
    margin-left: 30%;
    color: hsl(38, 61%, 73%);
    display: flex;
    flex-direction: column;
    align-items:center;
   }
   .img{
    width: 100%;
    border: 1px solid hsl(38, 61%, 73%);
    border-radius: 8px;
    box-shadow: 0 6px 25px hsl(38, 61%, 73%);
   }
   .text{
    margin-top: 60px;
   }
   .ancor {
    text-decoration: none;
    margin-left: 30px;
    position:absolute;
    top:40px;
    font-size: 25px;
    color: hsl(38, 61%, 73%) !important;
   }
  </style>`
  document.body.innerHTML = `
  <a class ="ancor" href="./menu.html">Back to Menu</a>
  <div class="cont">
        <h1 class="text">${data[prodId].name}</h1>
        <img class="img" src="${data[prodId].image}" alt="${data[prodId].name}">
        <p class="text">${data[prodId].dsc}</p>
        <p>Price: GEL${data[prodId].price}</p>
        <p>Rating: ${"☆".repeat(data[prodId].rate)}</p>
        </>
    `

    document.body.style.background ="black"

} else {
  console.error('Product not found');
}




