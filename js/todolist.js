document.addEventListener("DOMContentLoaded", function () {

    // Select all existing tasks in the task list.
    const existingTasks = document.querySelectorAll("#task-list li");

    // Iterate through each existing task.
    existingTasks.forEach(function (task) {
        const taskText = task.querySelector("span");

        // Add a click event listener to the task.
        task.addEventListener("click", function (event) {
            if (event.target.tagName !== 'BUTTON') {
                taskText.style.textDecoration = "line-through";
            }
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            task.parentNode.removeChild(task);
        };

        task.appendChild(deleteButton);
    });
});

// Function to add a new task to the task list.
function addTask() {
    // Get input
    const taskInput = document.getElementById("new-task");
    //Get text
    const taskText = taskInput.value.trim();

    // Check if the input is empty.
    if (taskText === "") {
        alert("You must write something!");
        return;
    } else {
        //Create new list item
        const taskList = document.getElementById("task-list");
        const newTaskItem = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = taskText;

        newTaskItem.appendChild(span);

        newTaskItem.addEventListener("click", function (event) { 
            if (event.target.tagName !== 'BUTTON') {
                span.style.textDecoration = "line-through";
            }
        });

        // Create a "Delete" button for the new task and set its behavior.
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            taskList.removeChild(newTaskItem);
        };

        newTaskItem.appendChild(deleteButton);
        taskList.appendChild(newTaskItem);

        // Clear the input field.
        taskInput.value = "";

    }
}




