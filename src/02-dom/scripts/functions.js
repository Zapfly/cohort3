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
        let answer = x.children[0]

        return answer

    },
    deleteCard: () => {

    },
}

export { functions }