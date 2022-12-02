import { filterTasks, formatTaskDates, getTasks } from './data.js';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
// import '@fortawesome/fontawesome-free/js/regular'

function initiateButtons() {
  const navButtons = document.querySelectorAll(".nav-button");
  const taskView = document.querySelectorAll(".task");
  const taskDetailedView = document.querySelectorAll(".task-details");
  const completeButtons = document.querySelectorAll(".fa-complete");

  navButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      if(e.target.classList.contains("active")) return;
      setActiveNavButton(button);
      createTasksDOM(button.dataset.filter);
    })
  })

  taskView.forEach(task => {
    task.addEventListener("click", (e) => {
      let index = e.target.closest("article").dataset.index;
      toggleTaskDetails(index);
    })
  })

  completeButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      let index = e.target.closest("article").classList;
      console.log(index);
      completeTaskView(index);
    })
  })

  function completeTaskView(index) {
        
  }

  function removeTaskView(index) {
    console.log(index);
  }

  function toggleTaskDetails(index) {
    if(taskDetailedView[index].classList.contains("hide")) {
      taskDetailedView[index].classList.remove("hide");
    } else {
      taskDetailedView[index].classList.add("hide");
    }
  }

  function setActiveNavButton(button) {
    navButtons.forEach(button => {
      if (button !== this) {
        button.classList.remove("active");
      }
    })
    button.classList.add("active");
  }
}

function createTasksDOM(filter) {
  const taskContainer = document.getElementById("task-container");

  if(!filter) filter = "all";
  taskContainer.innerHTML = `
<section id="task-header">
<h2>${filter}</h2> <div id="task-add">Add New Task</div>
</section>
`

  let tasks = getTasks(filter);
  tasks = formatTaskDates(tasks);

  for(let i = 0; i < tasks.length; i++){
    const taskArticle = document.createElement("article");
    taskArticle.dataset.index = i;
    taskArticle.classList.add("task");

    if(tasks[i].priority == "high") {
      taskArticle.classList.add("priority-high");
    } else if(tasks[i].priority == "medium") {
      taskArticle.classList.add("priority-medium");
    } else if(tasks[i].priority == "completed") {
      taskArticle.classList.add("completed");
    }

    taskContainer.appendChild(taskArticle);
    taskArticle.innerHTML = `
<div class="task-snippet">
<p class="task-title">
${tasks[i].title}
</p>
<div class="task-controls">
<span class="date">${tasks[i].date}</span>
<button class="fa-edit"><i class="fa-solid fa-pen"></i></button>
<button class="fa-delete"><i class="fa-solid fa-trash"></i></button>
<button class="fa-complete"><i class="fa-solid fa-check"></i></button>
<button class="fa-restore hide"><i class="fa-solid fa-rotate-left"></i></button>
</div>
</div>
<div class="task-details hide">
<div class="task-bubble">
<h4 class="task-bubble-header">Description:</h4>
<p class="task-bubble-text">
${tasks[i].description}
</p>
</div>
<div class="task-bubble">
<h4 class="task-bubble-header">Due Date:</h4>
<p class="task-bubble-text">
${tasks[i].date}
</p>
</div>
<div class="task-bubble">
<h4 class="task-bubble-header">Projects:</h4>
<p class="task-bubble-text">
${tasks[i].projects}
</p>
</div>
</div>
`
  }
  initiateButtons();
};

export { createTasksDOM }
