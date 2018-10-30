
console.log("hello")
const menu = document.getElementById('navbar');
const list = document.getElementById('list-container');
const contact = document.getElementById('card');
const contact1 = document.getElementById('card1');
const contactTarget = document.getElementById('contact-target');


menu.addEventListener("click", (event) => {

  list.classList.toggle('pascaché');
  if (menu.src === 'https://res.cloudinary.com/ebc-industries/image/upload/v1534499757/DRopdownicone.png') {
  menu.src = 'https://res.cloudinary.com/ebc-industries/image/upload/v1540041871/croixicone.png';
  } else {
    menu.src = 'https://res.cloudinary.com/ebc-industries/image/upload/v1534499757/DRopdownicone.png';
  }
});


contactTarget.addEventListener("click", function() {
  contact.classList.toggle('contact-view');
})



contactTarget.addEventListener("click", function() {
  contact1.classList.toggle('contact-work-view');
})
