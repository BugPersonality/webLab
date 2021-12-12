let tasks;

window.onload = load;

async function load(n) {
    if (typeof n === "object") {
        n = 5;
    }
    document.querySelector("#wrong").classList.add("none")
    document.querySelector(".preloader").classList.remove("none")
    let url = `https://jsonplaceholder.typicode.com/todos`;
    let response = await fetch(url);
    if (response.ok) {
        let json = await response.json();
        const shuffled = json.sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(0, n);
        selected.forEach(select => {
            addTask(select['title'], select['completed'])
        });
    } else {
        document.querySelector("#wrong").classList.remove("none")
    }
    document.querySelector(".preloader").classList.add("none");
}