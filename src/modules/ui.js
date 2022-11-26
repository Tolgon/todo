import fontawesome from '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

fontawesome.config = { autoReplaceSvg: false };

const navButtons = document.querySelectorAll(".nav-button");
const chevronDown = document.querySelectorAll(".fa-chevron-down");

navButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    if(e.target.classList.contains("active")) return;
    setActiveButton(button);
  })
})

chevronDown.forEach(button => {
  console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log("yo");
  })
})

function setActiveButton(button) {
  navButtons.forEach(button => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}
