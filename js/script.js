import createList from "./components/createList.js";
import { saveToStorage, getFromStorage } from "./utils/storage.js";
import { listKey } from "./settings.js";

let todos = getFromStorage(listKey);
createList(todos);

const input = document.querySelector("input");
const button = document.querySelector("#button");


button.addEventListener("click", addItem);

function addItem() {
    const itemValue = input.value.trim();

    if (itemValue.length >= 1) {
        const newItem = { id: Date.now(), name: itemValue };
        //  console.log(input.value); */
        todos.push(newItem);
        // console.log(todos); 

        createList(todos);
        saveToStorage(listKey, todos);
    }
}

