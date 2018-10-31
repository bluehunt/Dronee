
console.log("hello")
const menu = document.getElementById('navbar');
const list = document.getElementById('list-container');
const contact = document.getElementById('card');
const contact1 = document.getElementById('card1');
const contactTarget = document.getElementById('contact-target');

function menuGlissé() {

  list.classList.toggle('pascaché');
  if (menu.src === 'https://res.cloudinary.com/ebc-industries/image/upload/v1534499757/DRopdownicone.png') {
    menu.src = 'https://res.cloudinary.com/ebc-industries/image/upload/v1540041871/croixicone.png';
  } else {
    menu.src = 'https://res.cloudinary.com/ebc-industries/image/upload/v1534499757/DRopdownicone.png';
  }
};



menu.addEventListener("click", (event) => {
  if (menu.src === 'https://res.cloudinary.com/ebc-industries/image/upload/v1534499757/DRopdownicone.png') {
  list.style.display = 'block';
  window.setTimeout(menuGlissé, 15);
  } else {
  menuGlissé();
  window.setTimeout(function(){list.style.display = 'none';}, 700)
  }
});


contactTarget.addEventListener("click", function() {
  contact.classList.toggle('contact-view');
})



contactTarget.addEventListener("click", function() {
  contact1.classList.toggle('contact-work-view');
})
