import {functions} from "./card-functions.js"
import {Account} from './account.js'



const button = (x) => {
    if (event.target.textContent == "Add Card") {
        functions.addCard(leftSide, functions.cardCount)
    }
    if (event.target.textContent == "Delete") {
        functions.deleteCard(event.target.parentNode)
    }
    if (event.target.textContent == "Add Above") {
        functions.addAbove(event.target, functions.cardCount)
    }
    if (event.target.textContent == "Add Below") {
        functions.addBelow(event.target, functions.cardCount)
    }
    
    console.log(false)
}

//list.addEventListener("click", addAbove)
document.getElementById("leftSide").addEventListener("click", button);
document.getElementById("show-button").addEventListener("click", showButton);