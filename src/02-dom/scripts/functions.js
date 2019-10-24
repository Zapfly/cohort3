const functions = {
    cardCount: 0,
    addCard: (x, y) => {
        let div = document.createElement("div");
        div.setAttribute("class", "w3-card");
        div.setAttribute("counter", y);
        div.textContent = "Card Number" + y;
        x.appendChild(div);
        console.log("First count " + y)
        functions.cardCount = y + 1;
        console.log("Second count " + y)
                
    },
    whatCards: (x) => {
        let MTArr = []
        let i = 0;
        let obj = x.children
        for (i = 0; i < obj.length; i++) {            
            MTArr.push(obj[i].getAttribute("counter"));
        }
        return MTArr
    },
    deleteCard: () => {
        
    },
}

export { functions }