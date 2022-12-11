function taskTemplate(tasks, taskStatus, i) {
return `
<div class="task-snippet">
<div class="task-snippet-left ${taskStatus}">
<button class="fa-expand"><i class="fa-solid fa-chevron-down"></i></button>
<button class="fa-collapse hide"><i class="fa-solid fa-chevron-up"></i></button>
<p class="task-title">
${tasks[i].title}
</p>
</div>
<div class="task-controls">
<span class="date">${tasks[i].date}</span>
<button class="fa-edit"><i class="fa-solid fa-pen"></i></button>
<button class="fa-delete"><i class="fa-solid fa-trash"></i></button>
<button class="fa-complete"><i class="fa-solid fa-check"></i></button>
<button class="fa-restore hide"><i class="fa-solid fa-rotate-left"></i></button>
</div>
</div>
<div class="task-details hide">
<div class="task-bubble full-width-grid">
<h4 class="task-bubble-header">Description:</h4>
<p class="task-bubble-text">
${tasks[i].description}
</p>
</div>
<div class="task-bubble">
<h4 class="task-bubble-header">Due Date:</h4>
<p class="task-bubble-text">
${tasks[i].date}
</p>
</div>
<div class="task-bubble">
<h4 class="task-bubble-header">Project:</h4>
<p class="task-bubble-text">
${tasks[i].project}
</p>
</div>
</div>
`
}

export { taskTemplate };
