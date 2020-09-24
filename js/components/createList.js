import { saveToStorage, getFromStorage } from "../utils/storage.js";
import { listKey } from "../settings.js";

export default function createList(todos) {

    const listConainer = document.querySelector(".list-container");

    console.log(todos);

    listConainer.innerHTML = "";

    todos.forEach(function (item) {

        let checked = "";

        if (item.isComplete) {
            checked = "checked";
        }

        listConainer.innerHTML += `<li><span class="${checked}"> <input type="text" value="${item.name}" data-id="${item.id}"><input ${checked} type="checkbox" data-id="${item.id}"/></span></li>`
    });

    const checkboxes = document.querySelectorAll("li input");

    checkboxes.forEach(function (box) {
        box.addEventListener("click", toggleComplete);
    })

    function toggleComplete() {
        const id = event.target.dataset.id;
        const isComplete = event.target.checked;

        // console.log(isComplete);

        const updatedList = updateList(todos, id, isComplete);
        saveToStorage(listKey, updatedList);
        createList(updatedList);
    }


    const textboxes = document.querySelectorAll("li input[type=text]");

    textboxes.forEach(function (textbox) {
        textbox.addEventListener("keyup", updateValue);
    });

    function updateValue(event) {
        const id = event.target.dataset.id;
        const value = event.target.value.trim();

        const updatedList = updateValueInList(todos, id, value);
        console.log(updatedList);

    }
}


function updateList(todos, id, isComplete) {
    console.log("todos:", todos);
    console.log("id:", id);
    console.log("isComplete:", isComplete);

    const thisItemIndex = todos.findIndex(function (item) {
        if (item.id === parseInt(id)) {
            return true;
        }
    })

    todos[thisItemIndex].isComplete = isComplete;

    console.log(thisItemIndex);

    return todos;
}


function updateValueInList(todos, id, value) {
    const itemIndex = todos.findIndex(name => name.id === parseInt(id));

    todos[itemIndex].name = value;

    return todos;
}