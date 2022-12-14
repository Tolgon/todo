import { v4 as uuidv4 } from 'uuid';

// Fake data to get started.
export const tasksDB = [
  {
    id: uuidv4(),
    title: "Add checklist functionality to tasks.",
    date: new Date(),
    description: "A checklist is a type of job aid used in repetitive tasks to reduce failure by compensating for potential limits of human memory and attention. It helps to ensure consistency and completeness in carrying out a task. A basic example is the to do list.",
    priority: "normal",
    project: 2,
    completed: false
  },
  {
    id: uuidv4(),
    title: "Start solving the Riemann Hypothesis.",
    date: new Date(2022, 11, 13),
    description: "In mathematics, the Riemann hypothesis is the conjecture that the Riemann zeta function has its zeros only at the negative even integers and complex numbers with real part 1/2. Many consider it to be the most important unsolved problem in pure mathematics.",
    priority: "high",
    project: 1,
    completed: false
  },
  {
    id: uuidv4(),
    title: "Implement a light mode and toggle to switch between modes.",
    date: new Date(2022, 11, 9),
    description: "What is Dark Mode and why was it created? Dark mode (also known as black mode, night mode or dark theme) is a type of screen display that uses a dark background with lighter text (negative contrast polarity). It is the opposite of Light mode, which uses a light background with dark text (positive contrast polarity).",
    priority: "medium",
    project: 2,
    completed: false
  },
  {
    id: uuidv4(),
    title: "The four-color theorem.",
    date: new Date(1977, 11, 31),
    description: "In mathematics, the four color theorem, or the four color map theorem, states that no more than four colors are required to color the regions of any map so that no two adjacent regions have the same color.",
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
    title: " The Taniyama-Shimura conjecture.",
    date: new Date(1999, 0, 4),
    description: "The modularity theorem states that elliptic curves over the field of rational numbers are related to modular forms. Andrew Wiles proved the modularity theorem for semistable elliptic curves, which was enough to imply Fermat's Last Theorem. Later, a series of papers by Wiles's former students Brian Conrad, Fred Diamond and Richard Taylor, culminating in a joint paper with Christophe Breuil, extended Wiles's techniques to prove the full modularity theorem in 2001.",
    priority: "normal",
    project: 1,
    completed: true
  },
];

export const projectsDB = [
  {
    id: 1,
    title: "Math",
  },
  {
    id: 2,
    title: "Coding",
  },
];
