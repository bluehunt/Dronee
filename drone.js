console.log("hello")
const menu = document.getElementById('navbar');
const list = document.getElementById('list-container');
menu.addEventListener("click", (event) => {

  list.classList.toggle('pascaché');
  if (menu.src === 'https://res.cloudinary.com/ebc-industries/image/upload/v1534499757/DRopdownicone.png') {
  menu.src = 'https://res.cloudinary.com/ebc-industries/image/upload/v1540041871/croixicone.png';
  } else {
    menu.src = 'https://res.cloudinary.com/ebc-industries/image/upload/v1534499757/DRopdownicone.png';
  }
});
