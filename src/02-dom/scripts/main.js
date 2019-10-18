
const addButton = (x) => {
    console.log(x)
    let getList = document.getElementById("list")
    let listItem = document.createElement("li")
    listItem.textContent = "Item " + getList.childElementCount
    getList.appendChild(listItem)
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

//list.addEventListener("click", addAbove)
document.getElementById("add-button").addEventListener("click", addButton);
document.getElementById("show-button").addEventListener("click", showButton);

