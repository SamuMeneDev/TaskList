const taskInput = document.querySelector("#task-input");
const taskButton = document.querySelector("#task-button");
const list = document.querySelector(".list");
const warning = document.getElementById("warning");

function addTask() {
    if (taskInput.value == "") {
        warning.style.display = "block";
        warning.innerText = "Digite um nome para a tarefa!";
    } else {
        warning.style.display = "none";
        let li = document.createElement("li");
        li.innerHTML = `<p id='task-name'>${taskInput.value}</p>` + '<span class="material-symbols-outlined" onclick="deleteTask(this)">delete</span>';
        list.appendChild(li);
        taskInput.value = "";
        saveTask();
    }   
}
function deleteTask(li) {
    warning.style.display = "none";
    li.parentElement.remove();
    saveTask();
}

function saveTask() {
    let task = [];
    list.querySelectorAll('li').forEach(function(item) {
        task.push(item.innerHTML);
    });
    localStorage.setItem('task', JSON.stringify(task));
    document.title = "Teste"
}

function loadData() {
    const task = JSON.parse(localStorage.getItem('task')) || [];
    task.forEach(function(item) {
        const taskElement = document.createElement('li');
        taskElement.innerHTML = item;
        list.appendChild(taskElement);
    });
}
loadData();