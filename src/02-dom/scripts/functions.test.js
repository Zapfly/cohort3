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
    
    functions.addCard(group);
    functions.addCard(group);
    functions.addCard(group);
    console.log(document.getElementById("houseOfCards"))
    expect(functions.whatCards(group)).toEqual(["1", "2", "3"])
    
    functions.addCard(group, 1)    
    expect(functions.whatCards(document.getElementById("houseOfCards"))).toEqual(["1", "2", "3", "4"]);
    functions.addCard(group, 1)


    

})