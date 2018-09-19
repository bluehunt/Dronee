console.log("hello")
const menu = document.getElementById('menu');
const toggle = document.getElementById('toggle');
menu.addEventListener("click", (event) => {
  if (toggle.innerHTML == "<ul><li>Home</li><li>Work</li><li>Contact</li></ul>") {
   toggle.innerHTML = "<ul style='opacity: 1;'><li>Home</li><li>Work</li><li>Contact</li></ul>"
  } else {
    toggle.innerHTML = "<ul><li>Home</li><li>Work</li><li>Contact</li></ul>"
  }
});


