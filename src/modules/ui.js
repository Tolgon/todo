import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

const navButtons = document.querySelectorAll(".nav-button");

navButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    if(e.target.classList.contains("active")) return;
    setActiveButton(button);
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
