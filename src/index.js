document.addEventListener("DOMContentLoaded", () => {
    
  const taskForm =document.querySelector('form')
  
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const taskToDo = document.getElementById('new-task-description').value
     
    addTasks(taskToDo);

     taskForm.reset();
  })
});


function addTasks(taskToDo) {
  const actionList = document.createElement('li');
  const deleteButton = document.createElement('button');

  deleteButton.addEventListener('click', deleteAction)
  deleteButton.textContent =  'delete'
  actionList.textContent = `${taskToDo}   `;
  actionList.appendChild(deleteButton);

  document.querySelector("#tasks").appendChild(actionList);
 
}

function deleteAction (e) {
  e.target.parentNode.remove()
}