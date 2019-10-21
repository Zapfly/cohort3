export const functions = {
    addCard: (x, y) => {
        console.log("I am in the card");
        let div = document.createElement("div");
        div.setAttribute("class", "card");
        div.setAttribute("counter", y);
        div.textContent = y
        x.appendChild(div);
                
    },

    whatCards: (x) => {
        let emptyArr = []

        // x.forEach(
        //     (element) => {
        //         element.getAttribute("counter").push(emptyArr)
        //     }
        //  )
        return x[0].getAttribute("counter")
    }
}