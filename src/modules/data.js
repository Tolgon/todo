import { compareAsc, format } from "date-fns";

// Fake Data to get started.
function getTasks() {
  let initTasks = [
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

  initTasks.sort((a, b) => {
    return compareAsc(a.date, b.date); 
  })

  return initTasks;
}

function formatTaskDates(tasks) {
  for(let i = 0; i < tasks.length; i++) {
    tasks[i].date = format(tasks[i].date, 'dd-MM-yyyy');
  }

  return tasks;
}

function filterDates(tasks) {

}

export { getTasks, formatTaskDates }
