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
        let template = document.getElementById('template').content.cloneNode(true);
        let _tasks = document.getElementById("tasks");
        template.childNodes[1].childNodes[1].childNodes[3].setAttribute('value', task['task']);
        if (task['completed']) {
            template.childNodes[1].childNodes[1].childNodes[1].setAttribute('checked', '');
            template.childNodes[1].childNodes[1].childNodes[3].classList.add('completed');
        }
        _tasks.appendChild(template);
    });
}

function addTask() {
    const task = document.querySelector("form input");

    let tasks;
    !localStorage.tasks ? tasks = [] : tasks = Array.from(JSON.parse(localStorage.getItem("tasks")));

    let flag = 0;
    tasks.forEach(todo => {
        if (todo.task === task.value) {
            alert("NEW TASK MB....?");
            task.value = "";
            flag = 1;
        }
    });

    if (flag === 0) {
        localStorage.setItem("tasks", JSON.stringify([...JSON.parse(localStorage.getItem("tasks") || "[]"), {
            task: task.value,
            completed: false
        }]));

        let template = document.getElementById('template').content.cloneNode(true);
        let _tasks = document.getElementById("tasks");
        template.childNodes[1].childNodes[1].childNodes[3].setAttribute('value', task.value);
        _tasks.appendChild(template);
        task.value = "";
    }
}

var currTaks = null;

function getCurrentTask(event) {
    currTaks = event.value;
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
    event.parentElement.parentElement.remove();
}

function success() {
    if (document.getElementById("textsend").value.trim()==="") {
        document.getElementById('button').disabled = true;
    } else {
        document.getElementById('button').disabled = false;
    }
}