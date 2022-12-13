import { v4 as uuidv4 } from 'uuid';
import { createProject } from './data.js';

// Project Creation will be here.
class Project {
  constructor(title) {
    this.id = uuidv4();
    this.title = title;
  }
}

function addProject(title) {
  const project = new Project(title);
  
  createProject(project);
}

export { addProject };
