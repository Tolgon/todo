import { compareAsc, format, isThisWeek, isToday } from "date-fns";
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
  if(!tasks) {
    tasks = getTasks();
  }

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
    case "completed":
      tasksFiltered = tasks.filter(task => task.priority == "completed");
      break;
    default:
      tasksFiltered = tasks;
  }

  tasksFiltered.sort((a, b) => {
    return compareAsc(a.date, b.date); 
  })

  return tasksFiltered;
}

function parseDatesISO(arr) {

}

function formatTaskDates(arr) {
  for(let i = 0; i < arr.length; i++) {
    arr[i].date = format(arr[i].date, 'dd-MM-yyyy');
  }
  return arr;
}

function completeTaskToggle(index) {
  if(tasksFiltered[index].priority === "completed") {
    tasksFiltered[index].priority = "normal";
  } else {
    tasksFiltered[index].priority = "completed";
  }
  createTasksDOM(currentFilter);
}

function deleteTask(index) {
  let id = tasksFiltered[index].id;
  tasks = tasks.filter((task) => {
    return task.id !== id;
  })
  createTasksDOM(currentFilter);
}

export { filterTasks, formatTaskDates, completeTaskToggle, deleteTask }
