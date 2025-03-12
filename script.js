const input = document.getElementById("input");
const addButton = document.querySelector(".btn");
const todoList = document.querySelector(".addtodo");


todoList.addEventListener("click", function (event) {
    if (event.target.classList.contains("complete")) {
        event.target.parentElement.querySelector("a").style.textDecoration = "line-through";
    }
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    }
    });

    


addButton.addEventListener("click", function () {
    const taskText = input.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

const li = document.createElement("li");
const taskLink = document.createElement("a");
taskLink.href = "#";
    taskLink.textContent = taskText;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.classList.add("complete");
    completeButton.addEventListener("click", function () {
        taskLink.style.textDecoration = "line-through";
    });

    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(taskLink);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);

    input.value = "";
});