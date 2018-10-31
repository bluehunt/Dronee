const menu1 = document.getElementById('navbar1');
const contact1 = document.getElementById('card1');
const list1 = document.getElementById('list-container1');
const contactTarget1 = document.getElementById('contact-target1');

function menuGlissé1() {

  list1.classList.toggle('pascaché1');
  if (menu1.src === 'https://res.cloudinary.com/ebc-industries/image/upload/v1534499757/DRopdownicone.png') {
    menu1.src = 'https://res.cloudinary.com/ebc-industries/image/upload/v1540041871/croixicone.png';
  } else {
    menu1.src = 'https://res.cloudinary.com/ebc-industries/image/upload/v1534499757/DRopdownicone.png';
  }
};

menu1.addEventListener("click", (event) => {
  if (menu1.src === 'https://res.cloudinary.com/ebc-industries/image/upload/v1534499757/DRopdownicone.png') {
  list1.style.display = 'block';
  window.setTimeout(menuGlissé1, 15);
  } else {
  menuGlissé1();
  window.setTimeout(function(){list1.style.display = 'none';}, 700)
  }
});

contactTarget1.addEventListener("click", function() {
  contact1.classList.toggle('contact-work-view');
})