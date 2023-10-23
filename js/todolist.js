document.addEventListener("DOMContentLoaded", function () {

    const existingTasks = document.querySelectorAll("#task-list li");
    existingTasks.forEach(function (task) {
        const taskText = task.querySelector("span");

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

function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("You must write something!");
        return;
    } else {
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

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            taskList.removeChild(newTaskItem);
        };

        newTaskItem.appendChild(deleteButton);
        taskList.appendChild(newTaskItem);

        taskInput.value = "";

    }
}




