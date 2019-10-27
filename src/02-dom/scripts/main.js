import {functions} from "./functions.js"


const addButton = (x) => {
    console.log(x)
    let id = functions.countElementByTagName("li")
    let li1 = functions.makeElement("li");
    console.log(id)
    document.getElementById("list").appendChild(li1);
    console.log(id)
    document.getElementById("li" + (id)).textContent = "Item " + id
}



/* trying to find a way to get it to add a list item above 
the list item that has been clicked. 

const addAbove = () => {
    let getList = document.getElementById("list")
    let listItem = document.createElement("li")
    listItem.textContent = "Item " + getList.childElementCount
    EventTarget.insertBefore(listItem)
}
*/

const showButton = () => {
    let getList = document.getElementById("list").childNodes
    console.log(getList)        
}

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

