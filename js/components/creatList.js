export default function createList(todos) {
    const listConainer = document.querySelector(".list-container");

    listConainer.innerHTML = "";

    todos.forEach(function (task) {
        listConainer.innerHTML += `<li>${task.name}</li>`
    });
}