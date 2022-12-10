import { v4 as uuidv4 } from 'uuid';

// Fake data to get started.
export let tasksDB = [
  {
    id: uuidv4(),
    title: "This is a task.",
    date: new Date(2022, 11, 3),
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    priority: "normal",
    project: 2,
    completed: false
  },
  {
    id: uuidv4(),
    title: "This is a high priority task.",
    date: new Date(2022, 10, 30),
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    priority: "high",
    project: 1,
    completed: false
  },
  {
    id: uuidv4(),
    title: "This is a medium priority task.",
    date: new Date(2022, 11, 4),
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    priority: "medium",
    project: 2,
    completed: false
  },
  {
    id: uuidv4(),
    title: "This is a completed task 1.",
    date: new Date(2022, 11, 3),
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    priority: "normal",
    project: 1,
    completed: true
  },
  {
    id: uuidv4(),
    title: "This is a normal priority task 1.",
    date: new Date(2015, 3, 5),
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    priority: "normal",
    project: 1,
    completed: false
  },
  {
    id: uuidv4(),
    title: "This is a completed task 2.",
    date: new Date(2022, 0, 4),
    description: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    priority: "normal",
    project: 1,
    completed: true
  },
];

export let projectsDB = [
  {
    id: 1,
    title: "New React Project",
  },
  {
    id: 2,
    title: "Kitchen Renovations",
  },
];
