import createList from "./components/creatList.js";

let todos = [];

const input = document.querySelector("input");
const button = document.querySelector("#button");


button.addEventListener("click", addItem);

function addItem() {
    const itemValue = input.value.trim();

    if (itemValue.length >= 1) {
        const newItem = { id: Date.now(), name: itemValue, isComplete: false };
        console.log(input.value);
        todos.push(newItem);
        console.log(todos);

        createList(todos);

    }
}

