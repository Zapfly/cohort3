import {functions} from "./functions.js"

const whatCards = 
    (x) => {
    let MTArr = []
    let i = 0;
    let obj = x.children
    for (i = 0; i < obj.length; i++) {            
        MTArr.push(obj[i].getAttribute("counter"));
    }
    return MTArr
    }




test('Card checking', () => {
    const myDiv = document.createElement("div");
    myDiv.setAttribute("id", "play");
    functions.addCard(myDiv, functions.cardCount);
})

test('Card checking', () => {
    const group = document.createElement("div")
    group.setAttribute("id", "houseOfCards")
    document.body.appendChild(group)
    let idHouseOfCards = document.getElementById("houseOfCards");
    let myCards = idHouseOfCards.children;
    let oneCard = (x) => {
        return myCards[x]
    }
    
    functions.addCard(group, functions.cardCount);
    functions.addCard(group, functions.cardCount);
    functions.addCard(group, functions.cardCount);
    expect(whatCards(group)).toEqual(["2", "3", "4"])
    
    functions.addCard(group, functions.cardCount)    
    expect(whatCards(document.getElementById("houseOfCards")))
        .toEqual(["2", "3", "4", "5"]);
    functions.addCard(group, functions.cardCount)
    functions.deleteCard(houseOfCards.childNodes[3])
    expect(whatCards(houseOfCards))
        .toEqual(["2", "3", "4", "6"]);
    
    
    expect(oneCard(0).children[0].textContent)
        .toEqual("Add Above");
    expect(oneCard(0).children[1].textContent)
        .toEqual("Add Below");
    expect(oneCard(0).children[2].textContent)
        .toEqual("Delete");

    functions.addAbove(oneCard(0).children[2], functions.cardCount)
    expect(whatCards(houseOfCards))
        .toEqual(["7", "2", "3", "4", "6"])

    functions.addAbove(oneCard(3).children[2], functions.cardCount)
    expect(whatCards(houseOfCards))
        .toEqual(["7", "2", "3", "8", "4", "6"])

    functions.addBelow(oneCard(3).children[2], functions.cardCount)
    expect(whatCards(houseOfCards))
        .toEqual(["7", "2", "3",  "8", "9", "4", "6"])
    
})

test('button test', () => {
    const group = document.createElement("div")
    group.setAttribute("id", "houseOfCards")
    document.body.appendChild(group)
    functions.createButton(group, "button") 

    expect(String(button))
        .toEqual("[object HTMLButtonElement]");
})