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

    const whatCards2 = 
    (x) => {
    let MTArr = []
    let i = 0;
    let obj = x.children
    for (i = 0; i < obj.length; i++) {            
        MTArr.push(obj[i].textContent);
    }
    return MTArr
    }

const whatButtons = (x) => {
    let myId = document.getElementById(x)
    console.log(myId)
    let checkId = myId.getAttribute("id")
    console.log(checkId)
    let mychildren = myId.children
    console.log(mychildren)
    let text = mychildren.textContent
    console.log(text)
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
    
    functions.addCard(group, functions.cardCount);
    functions.addCard(group, functions.cardCount);
    functions.addCard(group, functions.cardCount);
    console.log(document.getElementById("houseOfCards"))
    expect(whatCards(group)).toEqual(["1", "2", "3"])
    
    functions.addCard(group, functions.cardCount)    
    expect(whatCards(document.getElementById("houseOfCards")))
        .toEqual(["1", "2", "3", "4"]);
    functions.addCard(group, functions.cardCount)
    functions.deleteCard(houseOfCards.childNodes[3])
    expect(whatCards(document.getElementById("houseOfCards")))
        .toEqual(["1", "2", "3", "5"]);
    
        let idHouseOfCards = document.getElementById("houseOfCards");
    let myCards = idHouseOfCards.children;
    let oneCard = (x) => {
        return myCards[x]
    }
    expect(oneCard(0).children[0].textContent)
        .toEqual("Add Above");
    expect(oneCard(0).children[1].textContent)
        .toEqual("Add Below");
    expect(oneCard(0).children[2].textContent)
        .toEqual("Delete");

    
    
})

test('button test', () => {
    const group = document.createElement("div")
    group.setAttribute("id", "houseOfCards")
    document.body.appendChild(group)
    functions.createButton(group, "button") 

    expect(String(button))
        .toEqual("[object HTMLButtonElement]");
})