import { functions } from "./DOMp1.js"

test('Card making', () => {
    const myDiv = document.createElement("div");
    myDiv.setAttribute("id", "play");
    functions.addCard(myDiv, 1);
})

// test('Card checking', () => {
//     const group = document.createElement("div")
    
//     functions.addCard(group, 1);
//     functions.addCard(group, 2);
//     functions.addCard(group, 3)
//     expect(functions.whatCards(group)).toEqual([1, 2, 3])
// })