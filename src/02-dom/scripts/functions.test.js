import {functions} from "./functions.js"



test('Card checking', () => {
    const myDiv = document.createElement("div");
    myDiv.setAttribute("id", "play");
    functions.addCard(myDiv, 1);
})

test('Card checking', () => {
    const group = document.createElement("div")
    group.setAttribute("id", "houseOfCards")
    document.body.appendChild(group)

    
    functions.addCard(group, 1);
    functions.addCard(group, 2);
    functions.addCard(group, 3);
    expect(functions.whatCards(group)).toEqual([1, 2, 3])
    functions.addCard(group, 1)
    expect(functions.whatCards(document.getElementById("houseOfCards"))).toEqual([1, 2, 3, 4])

    

})