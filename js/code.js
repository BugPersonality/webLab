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
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// document.addEventListener("mouseout", function(event) {
//     if (event.target.type == "submenu") {
//         event.target.style.backgroundColor = "#fefefe";
//         event.target.style.color = "#181a1e";
//     }
// });

// document.addEventListener("mouseover", function(event) {
//     if (event.target.type == "submenu") {
//         event.target.style.backgroundColor = "#181a1e";
//         event.target.style.color = "#fefefe";
//     }
// });

// Белый текст при наведении + 
// Исправить сабменю +
// document.get добавить + 
// исправть flex + 
