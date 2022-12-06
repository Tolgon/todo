import { compareAsc, format, isThisWeek, isToday, parseISO } from "date-fns";
import { createTasksDOM, currentFilter } from "./ui.js";
import { tasksDB } from './fake_db.js';

let tasks = null;
let tasksFiltered = [];

// Future logic to fetch external data here
function getTasks() {
  let tasksFetched = tasksDB;

  return tasksFetched;
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

function formatTaskDates(arr) {
  let dateArray = [];
  for(let i = 0; i < arr.length; i++) {
    dateArray.push(format(arr[i].date, 'dd-MM-yyyy'));
  }
  return dateArray;
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

export { filterTasks, formatTaskDates, completeTaskToggle, createTask, deleteTask }
