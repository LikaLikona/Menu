import data from './data.js';

const urlParams = new URLSearchParams(window.location.search);
const productid = parseInt(urlParams.get('productid'));

// Debugging: Log the data array to check if it's being loaded correctly
console.log(data);

const product = data.find(item => item.id === productid);

if (data) {
  // Create a new HTML file with the product description
  const newWindow = window.open('', '_blank');
  newWindow.document.write(`
    <html>
      <head>
        <title>${data.name}</title>
        <style>
        font-size: 1.5rem;
        margin-bottom: 10px;
        </style>
      </head>
      <body>
        <h1>${data.name}</h1>
        <img src="${product.image}" alt="${product.name}">
        <p>${data.dsc}</p>
        <p>Price: GEL${data.price}</p>
        <p>Rating: ${"☆".repeat(data.rate)}</p>
      </body>
    </html>
  `);
} else {
  console.error('Product not found');
}

