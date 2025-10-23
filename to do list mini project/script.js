const addTask = document.querySelector('#addTask');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');

addTask.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (!taskText) return alert('Please Enter Task');

    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">X</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
});


