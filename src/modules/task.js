import { createTask } from "./data";

class Task {
  constructor(title, description, priority, projects) {
    this.title = title;
    this.date = new Date();
    this.description = description;
    this.priority = priority;
    this.projects = projects;
    this.completed = false;
  }
}

function addTask(title, description, priority, projects) {
  const task = new Task(title, description, priority, projects);

  createTask(task);
}

export { addTask };
