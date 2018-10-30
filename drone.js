console.log("hello")
const menu = document.getElementById('menu');
const list = document.getElementById('list');
menu.addEventListener("click", (event) => {
  list.classList.toggle("hidden")
  list.classList.toggle("show")
});


