function taskFormTemplate() {
  return `
<form id="task-form">
  <div class="input">
    <label for="task-title">Title: <span>*</span></label>
    <input class="task-title" type="text" name="title" value="" required>
  </div>
  <div class="input">
    <label for="task-description">Description: <span>*</span></label>
    <textarea class="task-description" rows="2" cols="36" name="description" value="" required></textarea>
  </div>
  <div class="input">
    <label for="task-due-date">Due Date: <span>*</span></label>
    <input class="task-due-date" type="date" name="date" value="" required>
  </div>
  <div class="input">
    <label for="task-priority">Priority: <span>*</span></label>
    <select class="task-priority" name="priority" required>
      <option value="" disabled selected>How important is the task?</option>
      <option value="normal">Normal priority</option>
      <option value="medium">Medium priority</option>
      <option value="high">High priority</option>
    </select>
  </div>
  <div class="input">
    <label for="task-project">Project: <span>*</span></label>
    <select class="task-project" name="project" required>
      <option value="" disabled selected>Belongs to which project?</option>
    </select>
  </div>
  <div class="form-bottom">
    <button type="submit" id="submit">Submit</button>
  </div>
</form>
`
}

export { taskFormTemplate };
