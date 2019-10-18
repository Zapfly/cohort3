import {functions} from "./functions.js"

test('DOM test', () => {
    let div1 = functions.makeDIV()
    document.body.appendChild(div1)

    expect(document.getElementsByTagName("div").toEqual("div"))
    expect(document.getElementsById("list").toEqual("div"))

});