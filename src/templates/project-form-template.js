function projectFormTemplate() {
  return `
<form id="project-form">
  <div class="input">
    <input type="text" name="title" placeholder="Enter project name..." >
  </div>
  <div class="project-buttons-wrapper">
    <button id="project-add-button" class="project-button">Add</button>
    <button id="project-cancel-button" class="project-button">Cancel</button>
  </div>
</form>
`
}

export { projectFormTemplate };
