import { createTask } from "./data";
import { v4 as uuidv4 } from 'uuid';

class Task {
  constructor(title, description, date, priority, project) {
    this.id = uuidv4();
    this.title = title;
    this.date = date;
    this.description = description;
    this.priority = priority;
    this.project = project;
    this.completed = false;
  }
}

function addTask(title, description, date, priority, project) {
  const task = new Task(title, description, date, priority, project);

  createTask(task);
}

export { addTask };
