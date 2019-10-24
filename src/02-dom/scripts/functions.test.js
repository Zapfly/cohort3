import {functions} from "./functions.js"



test('Card checking', () => {
    const myDiv = document.createElement("div");
    myDiv.setAttribute("id", "play");
    functions.addCard(myDiv, functions.cardCount);
})

test('Card checking', () => {
    const group = document.createElement("div")
    group.setAttribute("id", "houseOfCards")
    document.body.appendChild(group)
    
    functions.addCard(group, functions.cardCount);
    functions.addCard(group, functions.cardCount);
    functions.addCard(group, functions.cardCount);
    console.log(document.getElementById("houseOfCards"))
    expect(functions.whatCards(group)).toEqual(["1", "2", "3"])
    
    functions.addCard(group, functions.cardCount)    
    expect(functions.whatCards(document.getElementById("houseOfCards"))).toEqual(["1", "2", "3", "4"]);
    functions.addCard(group, functions.cardCount)


    

})