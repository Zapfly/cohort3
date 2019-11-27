function insertAfter(el, referenceNode) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

const functions = {
    cardCount: 1,
    addCard: (x, y) => {
        let div = document.createElement("div");
        div.setAttribute("class", "w3-card");
        div.setAttribute("counter", y);
        div.textContent = "Card Number " + y;
        div.id = "Card" + y;        
        x.appendChild(div);
        functions.cardCount = y + 1;
        functions.createButton(div, "Add Above")
        functions.createButton(div, "Add Below")
        functions.createButton(div, "Delete")                
    },
    addAbove: (target, counter) => {
        let div = document.createElement("div");
        let card = target.parentNode;
        let parent = card.parentNode;
        div.setAttribute("class", "w3-card");
        div.setAttribute("counter", counter);
        div.textContent = "Card Number " + counter;
        div.id = "Card" + counter;   
        parent.appendChild(div);
        parent.insertBefore(div, card)     
        
        functions.cardCount = counter + 1;
        functions.createButton(div, "Add Above")
        functions.createButton(div, "Add Below")
        functions.createButton(div, "Delete")        
    },

    addBelow: (target, counter) => {
        
        let div = document.createElement("div");
        let card = target.parentNode;
        let parent = card.parentNode;
        div.setAttribute("class", "w3-card");
        div.setAttribute("counter", counter);
        div.textContent = "Card Number " + counter;
        div.id = "Card" + counter;   
        insertAfter(div, card)     
        
        functions.cardCount = counter + 1;
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
    }
}

export { functions }