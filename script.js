document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  addTaskBtn.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addTask();
  });

  function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText === '') return;

      const taskItem = document.createElement('li');
      taskItem.className = 'task';
      taskItem.innerHTML = `
          <span>${taskText}</span>
          <div>
              <i class='bx bx-check-circle' onclick="toggleComplete(this)"></i>
              <i class='bx bx-trash' onclick="removeTask(this)"></i>
          </div>
      `;
      taskList.appendChild(taskItem);
      taskInput.value = '';
  }
});

function toggleComplete(element) {
  element.parentElement.parentElement.classList.toggle('completed');
}

function removeTask(element) {
  element.parentElement.parentElement.classList.add('fall');
  element.parentElement.parentElement.addEventListener('transitionend', function () {
      this.remove();
  });
}
