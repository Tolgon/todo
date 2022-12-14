import { compareAsc, format, isThisWeek, isToday, parseISO } from "date-fns";
import { createProjectsDOM, createTasksDOM, currentFilter } from "./ui.js";
import { projectsDB, tasksDB } from './fake_db.js';
import { addTask } from "./task.js";
import { addProject } from "./project.js";

let tasks = null;
let tasksFiltered = [];

// Future logic to fetch tasks table
function getTasks() {
  return tasksDB;
}

function getTask(index) {
  index = findTaskDBIndex(index);
  return tasksDB[index];
}

// Future logic to fetch projects table
function getProjects() {
  return projectsDB;
}

function filterTasks(filter) {
  tasks = getTasks();

  switch(filter) {
    case "all":
      tasksFiltered = tasks;
      break;
    case "today":
      tasksFiltered = tasks.filter(task => isToday(task.date));
      break;
    case "week":
      tasksFiltered = tasks.filter(task => isThisWeek(task.date));
      break;
    case "important":
      tasksFiltered = tasks.filter(task => task.priority == "high");
      break;
    default:
      tasksFiltered = tasks.filter(task => task.project == findProjectDBIndex(filter));
  }

  tasksFiltered.sort((a, b) => {
    return compareAsc(a.date, b.date); 
  })

  return tasksFiltered;
}

function formatTasksUI(arr) {
  const projects = getProjects();

  return arr.map(task => {
    return {
      ...task,
      date: format(task.date, 'dd-MM-yyyy'),
      project: projects.find(o => o.id === task.project).title
    }
  })
}

function findProjectDBIndex(index) {
  const projects = getProjects();
  const id = projects[index].id;

  return id;
}

function findTaskDBIndex(index) {
  const id = tasksFiltered[index].id;
  index = tasksDB.findIndex(task => task.id === id);
  
  return index;
}

function completeTaskToggle(index) {
  index = findTaskDBIndex(index);

  if(tasksDB[index].completed === true) {
    tasksDB[index].completed = false;
  } else {
    tasksDB[index].completed = true;
  }
  createTasksDOM(currentFilter);
}

function createProject(project) {
  projectsDB.push(project);

  createProjectsDOM();
  createTasksDOM();
}

function createTask(task) {
  tasksDB.push(task);  

  createTasksDOM(currentFilter);
}

function editTask(task, index) {
  index = findTaskDBIndex(index)
  
  tasksDB[index].title = task.title;
  tasksDB[index].description = task.description;
  tasksDB[index].date = task.date;
  tasksDB[index].priority = task.priority;
  tasksDB[index].project = task.project;

  createTasksDOM(currentFilter);
}

function deleteTask(index) {
  index = findTaskDBIndex(index);
  tasksDB.splice(index, 1);

  createTasksDOM(currentFilter);
}

function taskFormSubmit(action, formData, index) {
  const task = {};
  formData.forEach((value, key) => (task[key] = value));
  task.date = parseISO(task.date);
  task.project = parseInt(task.project);

  switch(action) {
    case "add":
      addTask(task.title, task.description, task.date, task.priority, task.project);
      break;
    case "edit":
      if(!index) return;
      editTask(task, index);
      break;
  }
}

function projectFormSubmit(formData) {
  const project = {};
  formData.forEach((value, key) => (project[key] = value));
  
  addProject(project.title);
}

function formatDateToString(date) {
  return format(date, "yyyy-MM-dd");
}

function getProjectTitle(index) {
  const projects = getProjects();
  return projects[index].title;
}

export { getTask, getProjects, filterTasks, formatTasksUI, completeTaskToggle, createTask, deleteTask, taskFormSubmit, projectFormSubmit, formatDateToString, getProjectTitle, createProject };
