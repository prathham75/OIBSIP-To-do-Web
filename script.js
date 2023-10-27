document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task');
    const addTaskButton = document.getElementById('add-task');
    const pendingTasksList = document.getElementById('pending-tasks');
    const completedTasksList = document.getElementById('completed-tasks');
  
    addTaskButton.addEventListener('click', function () {
      const taskText = taskInput.value;
  
      if (taskText.trim() !== '') {
        // Create a new task item
        const li = document.createElement('li');
        li.innerHTML = `
          <span>${taskText}</span>
          <button class="complete">Complete</button>
          <button class="delete">Delete</button>
        `;
  
        // Add task item to the pending tasks list
        pendingTasksList.appendChild(li);
  
        // Clear the input field
        taskInput.value = '';
  
        // Add event listeners to the complete and delete buttons
        const completeButton = li.querySelector('.complete');
        const deleteButton = li.querySelector('.delete');
  
        completeButton.addEventListener('click', function () {
          li.classList.add('completed-task');
          completedTasksList.appendChild(li);
          completeButton.disabled = true;
        });
  
        deleteButton.addEventListener('click', function () {
          li.remove();
        });
      }
    });
  });
  