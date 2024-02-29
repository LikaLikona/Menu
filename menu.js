import data from './data.js';
console.log(data)

const menu_container= document.getElementById("menu_container");
const menu_count = 15;

const getMenu =async () => {
    for (let i=1; i<=menu_count; i++) {
        await fetchMenu(i)
    }
};
const fetchMenu = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    createMenuCard(data);
  };
  let MenuArr = [];

  document.body.appendChild(menu);

getMenu();