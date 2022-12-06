// Fake data to get started.
export let tasksDB = [
  {
    id: 1,
    title: "This is a task.",
    date: new Date(2022, 11, 3),
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    priority: "normal",
    projects: [ "New React Page", "Kitchen Renovations" ],
    completed: false
  },
  {
    id: 2,
    title: "This is a high priority task.",
    date: new Date(2022, 10, 30),
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    priority: "high",
    projects: [ "New React Page", "Kitchen Renovations" ],
    completed: false
  },
  {
    id: 3,
    title: "This is a medium priority task.",
    date: new Date(2022, 11, 4),
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    priority: "medium",
    projects: [ "New React Page", "Kitchen Renovations" ],
    completed: false
  },
  {
    id: 4,
    title: "This is a completed task 1.",
    date: new Date(2022, 11, 3),
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    priority: "normal",
    projects: [ "New React Page", "Kitchen Renovations" ],
    completed: true
  },
  {
    id: 5,
    title: "This is a normal priority task 1.",
    date: new Date(2015, 3, 5),
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    priority: "normal",
    projects: [ "New React Page", "Kitchen Renovations" ],
    completed: false
  },
  {
    id: 6,
    title: "This is a completed task 2.",
    date: new Date(2022, 0, 4),
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    priority: "normal",
    projects: [ "New React Page", "Kitchen Renovations" ],
    completed: true
  },
];
