import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'

(function initiateButtonListeners() {
  const navButtons = document.querySelectorAll(".nav-button");
  const taskExpandButtons = document.querySelectorAll(".fa-expand");
  const taskCollapseButtons = document.querySelectorAll(".fa-collapse");
  const taskDetailedView = document.querySelectorAll(".task-details");

  navButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      if(e.target.classList.contains("active")) return;
      setActiveButton(button);
    })
  })

  taskExpandButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      let index = e.target.parentNode.parentNode.parentNode.parentNode.dataset.index;
      expandDetails(index);
    })
  })

  taskCollapseButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      let index = e.target.parentNode.parentNode.parentNode.parentNode.dataset.index;
      collapseDetails(index);
    })
  })

  function expandDetails(index) {
    taskExpandButtons[index].classList.add("hide");
    taskCollapseButtons[index].classList.remove("hide");
    taskDetailedView[index].classList.remove("hide");
  }

  function collapseDetails(index) {
    taskCollapseButtons[index].classList.add("hide");
    taskExpandButtons[index].classList.remove("hide");
    taskDetailedView[index].classList.add("hide");
  }

  function setActiveButton(button) {
    navButtons.forEach(button => {
      if (button !== this) {
        button.classList.remove("active");
      }
    })
    button.classList.add("active");
  }
})();

