const functions = {
    addCard: (x, y) => {
        console.log("I am in the card");
        let div = document.createElement("div");
        div.setAttribute("class", "w3-card");
        div.setAttribute("counter", y);
        div.textContent = y
        x.appendChild(div);
                
    },
    whatCards: (x) => {
        let MTArr = []
        let i = 0;
        for (i = 0; i < x.children.length; i++) {
            MTArr.push((x.children[i].getAttribute("counter")));
        }
        
        

        return MTArr

    },
    deleteCard: () => {

    },
}

export { functions }