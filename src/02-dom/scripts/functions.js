const functions = {
    addCard: (x) => {
        let cardCount = document.querySelectorAll("div").length;
        let div = document.createElement("div");
        div.setAttribute("class", "w3-card");
        div.setAttribute("counter", cardCount);
        div.textContent = "Card Number" + cardCount;
        x.appendChild(div);
                
    },
    whatCards: (x) => {
        let MTArr = []
        let i = 0;
        let obj = x.children
        // MTArr.push(obj[1].getAttribute("counter"))
        for (i = 0; i < obj.length; i++) {            
            MTArr.push(obj[i].getAttribute("counter"))
        }
        return MTArr
    },
    deleteCard: () => {
        
    },
}

export { functions }