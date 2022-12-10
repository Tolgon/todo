import { compareAsc, format, isThisWeek, isToday } from "date-fns";
import { createTasksDOM, currentFilter } from "./ui.js";
import { projectsDB, tasksDB } from './fake_db.js';

let tasks = null;
let tasksFiltered = [];

let projects = [];

// Future logic to fetch external data here
function getTasks() {
  let tasksFetched = tasksDB;

  return tasksFetched;
}

function getProjects() {
  let projectsFetched = projectsDB;

  return projectsFetched;
}

function filterTasks(filter) {
  tasks = getTasks();

  switch(filter) {
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
      tasksFiltered = tasks;
  }

  tasksFiltered.sort((a, b) => {
    return compareAsc(a.date, b.date); 
  })

  return tasksFiltered;
}

function formatTasks(arr) {
  projects = getProjects();

  return arr.map((task) => {
    task.date = format(task.date, 'dd-MM-yyyy');
    const newObj = projectsDB.find(o => o.id === task.project);
    return {...task, project: newObj.title }; 
  })
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

function createTask(task) {
  tasksDB.push(task);  

  createTasksDOM(currentFilter);
}

function deleteTask(index) {
  index = findTaskDBIndex(index);
  tasksDB.splice(index, 1);

  createTasksDOM(currentFilter);
}

export { filterTasks, formatTasks, completeTaskToggle, createTask, deleteTask }
