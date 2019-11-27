import {functions} from './functions.js'


document.getElementById("idButton").addEventListener("click", () => {
    console.log("Hello from main.js");
    functions.dummy();
})