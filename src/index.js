import './style.css';
import { createProjectsDOM, createTasksDOM } from './modules/ui.js';

(function initiateSite() {
  createProjectsDOM();
  createTasksDOM();
})();
