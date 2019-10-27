const functions = {
    cardCount: 0,
    addCard: (x, y) => {
        let div = document.createElement("div");
        div.setAttribute("class", "w3-card");
        div.setAttribute("counter", y);
        div.textContent = "Card Number" + y;
        div.id = "Card" + y
        x.appendChild(div);
        functions.cardCount = y + 1;
        functions.createButton(div, "Add Above")
        functions.createButton(div, "Add Below")
        functions.createButton(div, "Delete")

                
    },

    deleteCard: (element) => {
        element.parentNode.removeChild(element);        
    },
    createButton: (parent, buttId) => {
        const butt = document.createElement("button")
        butt.textContent = String(buttId)
        butt.id = buttId
        parent.appendChild(butt)
        console.log("butt test " + parent)
    }
}

export { functions }