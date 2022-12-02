import { compareAsc, format, isThisWeek, isToday } from "date-fns";

// Fake Data to get started.
function getTasks(filter) {
  let tasks = [
    {
      title: "This is a task.",
      date: new Date(2022, 11, 2),
      description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      priority: "normal",
      projects: [ "New React Page", "Kitchen Renovations" ],
    },
    {
      title: "This is a high priority task.",
      date: new Date(2022, 10, 30),
      description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      priority: "high",
      projects: [ "New React Page", "Kitchen Renovations" ],
    },
    {
      title: "This is a medium priority task.",
      date: new Date(2022, 11, 4),
      description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      priority: "medium",
      projects: [ "New React Page", "Kitchen Renovations" ],
    },
    {
      title: "This is a completed task.",
      date: new Date(2022, 11, 2),
      description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      priority: "completed",
      projects: [ "New React Page", "Kitchen Renovations" ],
    },
    {
      title: "This is a normal priority task.",
      date: new Date(2015, 3, 5),
      description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      priority: "normal",
      projects: [ "New React Page", "Kitchen Renovations" ],
    },
    {
      title: "This is a completed task.",
      date: new Date(2022, 0, 4),
      description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
      priority: "completed",
      projects: [ "New React Page", "Kitchen Renovations" ],
    },
  ];
  
  let tasksLength = tasks.length;

  if(filter !== "all") {
    if(filter == "today") {
      for(let i = 0; i < tasksLength; i++) {
        tasks = tasks.filter(task => isToday(task.date));
      }
    } else if(filter == "week") {
      for(let i = 0; i < tasksLength; i++) {
        tasks = tasks.filter(task => isThisWeek(task.date));
      }
    } else if(filter == "important") {
      for(let i = 0; i < tasksLength; i++) {
        tasks = tasks.filter(task => task.priority == "high");
      }
    } else if(filter == "completed") {
      for(let i = 0; i < tasksLength; i++) {
        tasks = tasks.filter(task => task.priority == "completed");
      }
    }
  }

  tasks.sort((a, b) => {
    return compareAsc(a.date, b.date); 
  })

  return tasks;
}

function formatTaskDates(tasks) {
  for(let i = 0; i < tasks.length; i++) {
    tasks[i].date = format(tasks[i].date, 'dd-MM-yyyy');
  }

  return tasks;
}

export { getTasks, formatTaskDates }
