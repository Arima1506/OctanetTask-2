document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date');
    const priorityInput = document.getElementById('priority');
    const categoryInput = document.getElementById('category');
    const taskList = document.getElementById('task-list');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
  
    taskForm.addEventListener('submit', (e) => {
      e.preventDefault();
      addTask();
    });
  
    themeToggle.addEventListener('change', () => {
      body.classList.toggle('dark-mode', themeToggle.checked);
      body.classList.toggle('light-mode', !themeToggle.checked);
    });
  
    function addTask() {
      const taskText = taskInput.value;
      const dueDate = dueDateInput.value;
      const priority = priorityInput.value;
      const category = categoryInput.value;
  
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
        <span>${taskText} - ${dueDate} - ${priority} - ${category}</span>
        <div>
          <button class="complete-btn">Complete</button>
          <button class="delete-btn">Delete</button>
        </div>
      `;
  
      taskList.appendChild(taskItem);
  
      taskItem.querySelector('.complete-btn').addEventListener('click', () => {
        taskItem.classList.toggle('complete');
      });
  
      taskItem.querySelector('.delete-btn').addEventListener('click', () => {
        taskList.removeChild(taskItem);
      });
  
      taskForm.reset();
    }
  });
  



  