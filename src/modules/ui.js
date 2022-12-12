import { completeTaskToggle, deleteTask, filterTasks, getProjects, formatTasksUI } from './data.js';
import { taskTemplate } from '../templates/task-template.js';
import { addTaskTemplate } from '../templates/add-task-template.js';
import { editTaskTemplate } from '../templates/edit-task-template.js';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
// import '@fortawesome/fontawesome-free/js/regular'

let currentFilter = null;

function toggleModal(toggle, view) {
  const modalWrapper = document.getElementsByClassName("modal-wrapper");
  const formContainer = document.getElementById("modal-form-container");
  const projects = getProjects();

  switch(view) {
    case "add":
      formContainer.innerHTML = addTaskTemplate();
      break;
    case "edit":
      formContainer.innerHTML = editTaskTemplate();
      break;
  }

  if(toggle) {
    modalWrapper[0].style.display = "flex";
    formListProjects(projects);
  } else {
    modalWrapper[0].style.display = "none";
    formContainer.innerHTML = "";
  }
}

function formListProjects(projects) {
  const select = document.querySelector(".task-project");
  for(let i = 0; i < projects.length; i++) {
    const option = document.createElement("option");
    select.appendChild(option);
    option.textContent = projects[i].title;
    option.value = projects[i].id;
  }
}

function initiateButtons() {
  const navButtons = document.querySelectorAll(".nav-button");
  const taskAddButton = document.getElementById("task-add");
  const modalCloseButton = document.getElementById("modal-close");
  const taskView = document.querySelectorAll(".task");
  const editButtons = document.querySelectorAll(".fa-edit");
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

  taskAddButton.addEventListener("click", () => {
    toggleModal(true, "add");
  })

  modalCloseButton.addEventListener("click", () => {
    toggleModal(false);
  })

  taskView.forEach(task => {
    task.addEventListener("click", (e) => {
      let index = e.target.closest("article");
      toggleTaskDetails(index);
    })
  })

  editButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      let index = e.target.closest("article").dataset.index;
      console.log(index);
      toggleModal(true, "edit");
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

function createProjectsDOM() {
  let projects = getProjects();

  const projectNav = document.getElementById("projects-nav");
  const projectCount = document.getElementById("projects-count");

  projectCount.textContent = `(${projects.length})`
  for(let i = 0; i < projects.length; i++) {
    const navItem = document.createElement("a");
    navItem.innerHTML = `<li class="nav-button">${projects[i].title}</li>`;
    projectNav.appendChild(navItem);
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
  tasks = formatTasksUI(tasks);
  let incompleteCount = 0;
  let completeCount = 0;

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
    } else if(tasks[i].completed) {
      taskStatus = "completed";
      taskArticle.classList.add("completed");
      taskCompletedContainer.appendChild(taskArticle);
      completeCount++;
    }

    taskArticle.innerHTML = taskTemplate(tasks, taskStatus, i);
  }

  if(incompleteCount === 0) taskContainer.innerHTML = `<p class="no-tasks">No active tasks found.</p>`;
  if(completeCount === 0) taskCompletedContainer.innerHTML = `<p class="no-tasks">No completed tasks found.</p>`;

  initiateButtons();
};

export { currentFilter, createProjectsDOM, createTasksDOM }
