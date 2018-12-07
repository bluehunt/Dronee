console.log("hello")
const menu = document.getElementById('navbar');
const list = document.getElementById('list-container');
const contact = document.getElementById('card');
const contactTarget = document.getElementById('contact-target');


contactTarget.addEventListener("click", function() {
  contact.classList.toggle('contact-work-view');
})



