// Get HTML elements
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const taskCount = document.getElementById("task-count");

// Create an array to store tasks
let tasks = [];

// Function to update task count
function updateTaskCount() {
    const remainingTasks = tasks.filter(task => !task.completed).length;

    taskCount.textContent = `${remainingTasks} tasks remaining`;
}

// Function to display tasks
function displayTasks() {
    todoList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span>${task.name}</span>
            <button onclick="completeTask(${index})">
                ${task.completed ? "Undo" : "Complete"}
            </button>
            <button onclick="deleteTask(${index})">
                Delete
            </button>
        `;

        if (task.completed) {
            li.style.textDecoration = "line-through";
        }

        todoList.appendChild(li);
    });

    updateTaskCount();
}

// Add a new task
todoForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskName = todoInput.value.trim();

    if (taskName === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        name: taskName,
        completed: false
    });

    todoInput.value = "";

    displayTasks();
});

// Complete or undo a task
function completeTask(index) {
    tasks[index].completed = !tasks[index].completed;

    displayTasks();
}

// Delete a task
function deleteTask(index) {
    tasks.splice(index, 1);

    displayTasks();
}

// Initial display
displayTasks();
