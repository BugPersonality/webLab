new ClipboardJS('.btn');

 function fun() {
    let event = document.querySelectorAll('.btn');
    event.forEach(e => e.innerHTML = 'Copy to clipboard');
 }

 function copy(event) {
    event.innerHTML = 'Copied';
    setTimeout(fun, 2000);
 }