import {functions} from "./functions.js"

test('DOM test', () => {
    let div1 = functions.makeElement("div");
    document.body.appendChild(div1);
    
    expect(functions.countElementByTagName("div")).toEqual(1);
    expect(String(document.querySelector("#div0"))).toEqual("[object HTMLDivElement]");
    
    let ol1 = functions.makeElement("ol");
    document.getElementById("div0").appendChild(ol1);

    expect(functions.countElementByTagName("ol")).toEqual(1);
    expect(String(document.querySelector("#ol0"))).toEqual("[object HTMLOListElement]");

    let li1 = functions.makeElement("li");
    document.getElementById("ol0").appendChild(li1);

    expect(functions.countElementByTagName("li")).toEqual(1);
    expect(String(document.querySelector("#li0"))).toEqual("[object HTMLLIElement]");


});