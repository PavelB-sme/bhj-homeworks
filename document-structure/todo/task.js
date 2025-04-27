const formTasks = document.getElementById('tasks__form');
const taskInput = formTasks.querySelector('#task__input');
const tasksList = document.getElementById('tasks__list');

function addTask(textTask) {
    const task = document.createElement('div');
    task.className = 'task';
    task.innerHTML = `
     <div class="task__title">${textTask}</div>
     <a href="#" class="task__remove">&times;</a>
  `;
    tasksList.appendChild(task);
}

function saveTask () {
    const tasks = [];
    document.querySelectorAll('.task__title').forEach(task => {
      tasks.push(task.textContent);
    })
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => {
      addTask(task);
    })
}

document.addEventListener('submit', e => {
  e.preventDefault();
  if (taskInput.value.trim()) {
    addTask(taskInput.value);
    saveTask();
    formTasks.reset();
  }
})

document.addEventListener('click', e => {
  const targetTask = e.target;
  if(targetTask.classList.contains('task__remove')) {
    targetTask.closest('.task').remove();
    saveTask();
  }
})

document.addEventListener('DOMContentLoaded', loadTasks);