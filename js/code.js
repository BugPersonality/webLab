var before_loadtime = new Date().getTime();

var aftr_loadtime = new Date().getTime();
var nowPageMenu = document.URL.split('/').at(-1).split('.')[0];

window.onload = Pageloadtime;

function Pageloadtime() {
    pgloadtime = (aftr_loadtime - before_loadtime) / 1000
    
    document.querySelector('footer').textContent += "| Page load time is " + pgloadtime + " Seconds | " + nowPageMenu;

    var element = document.getElementsByName(nowPageMenu);
    element[0].style.textDecoration = "underline";;
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;

        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

document.addEventListener("mouseout", function(event) {
    if (event.target.type == "submenu") {
        event.target.parentElement.style.backgroundColor = "#fefefe";
    }
}, false);

document.addEventListener("mouseover", function(event) {
    if (event.target.type == "submenu") {
        event.target.parentElement.style.backgroundColor = "#181a1e";
    }
}, false);