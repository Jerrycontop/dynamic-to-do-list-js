// Run this after the HTML has fully loaded
document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a new task
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Create a new <li> element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a "Remove" button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // When clicked, remove the task
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append the button to the task, and task to the list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear the input
    taskInput.value = '';
  }

  // Event listener for button click
  addButton.addEventListener('click', addTask);

  // Allow pressing "Enter" key to add task
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
