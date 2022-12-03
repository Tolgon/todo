import { compareAsc, format, isThisWeek, isToday } from "date-fns";
import { tasksDB } from './fake_db.js';
import { createTasksDOM, currentFilter } from "./ui.js";

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

  if(filter === "today") {
    tasksFiltered = tasks.filter(task => isToday(task.date));
  } else if(filter === "week") {
    tasksFiltered = tasks.filter(task => isThisWeek(task.date));
  } else if(filter === "important") {
    tasksFiltered = tasks.filter(task => task.priority == "high");
  } else if(filter === "completed") {
    tasksFiltered = tasks.filter(task => task.priority == "completed");
  } else {
    tasksFiltered = tasks;
  }

  tasksFiltered.sort((a, b) => {
    return compareAsc(a.date, b.date); 
  })

  console.log(tasksFiltered);
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
  tasksFiltered.splice(index, 1);
  createTasksDOM(currentFilter);
}

export { filterTasks, formatTaskDates, completeTaskToggle, deleteTask }
