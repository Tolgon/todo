import { completeTaskToggle, deleteTask, filterTasks, formatTaskDates } from './data.js';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
// import '@fortawesome/fontawesome-free/js/regular'

let currentFilter = null;

function initiateButtons() {
  const navButtons = document.querySelectorAll(".nav-button");
  const taskView = document.querySelectorAll(".task");
  const deleteButtons = document.querySelectorAll(".fa-delete");
  const completeButtons = document.querySelectorAll(".fa-complete");

  navButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      if(e.target.classList.contains("active")) return;
      setActiveNavButton(button);
      currentFilter = button.dataset.filter;
      createTasksDOM(currentFilter);
    })
  })

  taskView.forEach(task => {
    task.addEventListener("click", (e) => {
      let index = e.target.closest("article");
      toggleTaskDetails(index);
    })
  })

  deleteButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      let index = e.target.closest("article").dataset.index;
      deleteTask(index);
    })
  })

  completeButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      let index = e.target.closest("article").dataset.index;
      completeTaskView(index);
    })
  })

  function completeTaskView(index) {
    if(taskView[index].classList.contains("completed")) {
      taskView[index].classList.remove("completed");
      completeTaskToggle(index);
    } else {
      taskView[index].classList.add("completed");
      completeTaskToggle(index);
    }
  }

  function toggleTaskDetails(index) {
    let taskDetailClassList = index.querySelector(".task-details").classList;
    let expandButtonClassList = index.querySelector(".fa-expand").classList;
    let collapseButtonClassList = index.querySelector(".fa-collapse").classList;

    if(taskDetailClassList.contains("hide")) {
      taskDetailClassList.remove("hide");
      expandButtonClassList.add("hide");
      collapseButtonClassList.remove("hide");
    } else {
      taskDetailClassList.add("hide");
      expandButtonClassList.remove("hide");
      collapseButtonClassList.add("hide");
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
  const taskCompletedContainer = document.getElementById("task-completed-container");
  const filterTitle = document.getElementById("filter-title");

  if(!filter) filter = "all";
  filterTitle.innerHTML = filter;
  taskContainer.innerHTML = "";
  taskCompletedContainer.innerHTML = "";

  let tasks = filterTasks(filter);
  let dateArray = formatTaskDates(tasks);
  let incompleteCount = 0;

  for(let i = 0; i < tasks.length; i++) {
    const taskArticle = document.createElement("article");
    taskArticle.dataset.index = i;
    taskArticle.classList.add("task");

    let taskStatus = "";
    if(tasks[i].priority === "normal" && !tasks[i].completed) {
      taskContainer.appendChild(taskArticle);
      incompleteCount++;
    } else if(tasks[i].priority === "high" && !tasks[i].completed) {
      taskStatus = "priority-high";
      taskArticle.classList.add("priority-high");
      taskContainer.appendChild(taskArticle);
      incompleteCount++;
    } else if(tasks[i].priority === "medium" && !tasks[i].completed) {
      taskStatus = "priority-medium";
      taskArticle.classList.add("priority-medium");
      taskContainer.appendChild(taskArticle);
      incompleteCount++;
    } else if(tasks[i].completed === true) {
      taskStatus = "completed";
      taskArticle.classList.add("completed");
      taskCompletedContainer.appendChild(taskArticle);
    }


    taskArticle.innerHTML = `
<div class="task-snippet">
<div class="task-snippet-left ${taskStatus}">
<button class="fa-expand"><i class="fa-solid fa-chevron-down"></i></button>
<button class="fa-collapse hide"><i class="fa-solid fa-chevron-up"></i></button>
<p class="task-title">
${tasks[i].title}
</p>
</div>
<div class="task-controls">
<span class="date">${dateArray[i]}</span>
<button class="fa-edit"><i class="fa-solid fa-pen"></i></button>
<button class="fa-delete"><i class="fa-solid fa-trash"></i></button>
<button class="fa-complete"><i class="fa-solid fa-check"></i></button>
<button class="fa-restore hide"><i class="fa-solid fa-rotate-left"></i></button>
</div>
</div>
<div class="task-details hide">
<div class="task-bubble full-width-grid">
<h4 class="task-bubble-header">Description:</h4>
<p class="task-bubble-text">
${tasks[i].description}
</p>
</div>
<div class="task-bubble">
<h4 class="task-bubble-header">Due Date:</h4>
<p class="task-bubble-text">
${dateArray[i]}
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

  if(incompleteCount === 0) taskContainer.innerHTML = `<p class="no-tasks">No active tasks...</p>`;

  initiateButtons();
};

export { currentFilter, createTasksDOM }
