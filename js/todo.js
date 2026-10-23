
let tasks = [];
let taskInput = document.getElementById("newTask");
let taskList = document.getElementById("taskList");
let message = document.getElementById("todoMessage");

function addTask() {
    let text = taskInput.value.trim();

    if (text === "") {
        message.textContent = "Please enter a task.";
        return;
    }

    tasks.push({ text: text, done: false });
    taskInput.value = "";
    message.textContent = "Task added!";
    showTasks();
}

function showTasks() {
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let item = document.createElement("li");
        let taskText = document.createElement("span");
        let doneButton = document.createElement("button");
        let deleteButton = document.createElement("button");

        taskText.textContent = tasks[i].text;
        if (tasks[i].done) {
            doneButton.textContent = "Undo";
        } else {
            doneButton.textContent = "Done";
        }
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";

        if (tasks[i].done) {
            item.classList.add("done");
        }

        doneButton.addEventListener("click", function () {
            tasks[i].done = !tasks[i].done;
            showTasks();
        });

        deleteButton.addEventListener("click", function () {
            tasks.splice(i, 1);
            showTasks();
        });

        item.appendChild(taskText);
        item.appendChild(doneButton);
        item.appendChild(deleteButton);
        taskList.appendChild(item);
    }

    document.getElementById("taskCount").textContent = tasks.length + " tasks";
    if (tasks.length === 0) {
        document.getElementById("emptyMessage").style.display = "block";
    } else {
        document.getElementById("emptyMessage").style.display = "none";
    }
}

document.getElementById("addTaskButton").addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
