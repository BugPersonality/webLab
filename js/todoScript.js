var before_loadtime = new Date().getTime();

var nowPageMenu = document.URL.split('/').at(-1).split('.')[0];

window.onload = Pageloadtime;

function Pageloadtime() {
    var aftr_loadtime = new Date().getTime();
    pgloadtime = (aftr_loadtime - before_loadtime) / 1000
    
    document.querySelector('footer').textContent += "| Page load time is " + pgloadtime + " Seconds | " + nowPageMenu;

    var element = document.getElementsByName(nowPageMenu);
    element[0].style.textDecoration = "underline";

    document.getElementById("myDropdown").addEventListener("mouseout", function(event) {
        event.target.style.backgroundColor = "#fefefe";
        event.target.style.color = "#181a1e";
    });
    
    document.getElementById("myDropdown").addEventListener("mouseover", function(event) {
        event.target.style.backgroundColor = "#181a1e";
        event.target.style.color = "#fefefe";
    });

    loadTask()
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function loadTask() {
    let tasks;
    !localStorage.tasks ? tasks = [] : tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

    tasks.forEach(task => {
        const list = document.querySelector("ul");
        const li = document.createElement("li");

        li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check" ${task.completed ? 'checked' : ''}>
        <input type="text" value="${task.task}" class="task ${task.completed ? 'completed' : ''}" onfocus="getCurrentTask(this)" onblur="editTask(this)">
        <button type="delete" onclick="removeTask(this)">
            &minus;
        </button>`;
          
        list.insertBefore(li, list.children[0]);
    });
}

function addTask() {
    const task = document.querySelector("form input");
    const list = document.querySelector("ul");

    if (task.value === "") {
        alert("TASK ..........????????");
        return false;
    }

    let tasks;
    !localStorage.tasks ? tasks = [] : tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

    tasks.forEach(todo => {
        if (todo.task === task.value) {
            alert("NEW TASK MB....?");
            task.value = "";
            return;
        }
    });

    localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), { task: task.value, completed: false }]));

    const li = document.createElement("li");

    li.innerHTML = `<input type="checkbox" onclick="taskComplete(this)" class="check">
    <input type="text" value="${task.value}" class="task" onfocus="getCurrentTask(this)" onblur="editTask(this)">
    <button type="delete" onclick="removeTask(this)">
        &minus;
    </button>`;

    list.insertBefore(li, list.children[0]);
    task.value = "";
}

var currTaks = null;

function getCurrentTask(event) {
    currTaks = event.value;
}

function editTask(event) {
    let tasks;
    !localStorage.tasks ? tasks = [] : tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

    if (event.value === "") {
        alert("TASK ..........????????");
        event.value = currTaks;
        return;
    }

    tasks.forEach(task => {
        if (task.task === event.value) {
            alert("NEW TASK MB....?");
            event.value = currTaks;
            return false;
        }
    });

    tasks.forEach(task => {
        if (task.task === currTaks) {
          task.task = event.value;
        }
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function taskComplete(event) {
    let tasks;
    !localStorage.tasks ? tasks = [] : tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

    tasks.forEach(task => {
        if (task.task === event.nextElementSibling.value) {
            task.completed = !task.completed;
        }
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    event.nextElementSibling.classList.toggle("completed");
}

function removeTask(event) {
    let tasks;
    !localStorage.tasks ? tasks = [] : tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

    tasks.forEach(task => {
        if (task.task === event.parentNode.children[1].value) {
            tasks.splice(tasks.indexOf(task), 1);
        }
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    event.parentElement.remove();
}