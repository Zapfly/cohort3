import functions from './functions.js';
import {myCalculator, taxes} from './Comp100.js';


//MY CALCULATOR//

const addStep2 = () => {
    console.log("button works")
    let x = Number(document.getElementById("input1").value);
    let y = Number(document.getElementById("input2").value);
    let z = myCalculator.add(x, y);
    document.getElementById("output").textContent = z
}

const subtractStep2 = () => {
    console.log("button works")
    let x = Number(document.getElementById("input1").value);
    let y = Number(document.getElementById("input2").value);
    let z = myCalculator.subtract(x, y);
    document.getElementById("output").textContent = z
}

const multiplyStep2 = () => {
    console.log("button works")
    let x = Number(document.getElementById("input1").value);
    let y = Number(document.getElementById("input2").value);
    let z = myCalculator.multiply(x, y);
    document.getElementById("output").textContent = z
}

const divideStep2 = () => {
    console.log("button works")
    let x = Number(document.getElementById("input1").value);
    let y = Number(document.getElementById("input2").value);
    let z = myCalculator.divide(x, y);
    document.getElementById("output").textContent = z
}

//TAX CALCULATOR

const taxOutput = () => {
    let a = document.getElementById("income").value;
    let b = taxes.taxStub(Number(a));
    document.getElementById("taxPayable").textContent = b
}


// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

document.getElementById("addButton").addEventListener("click", addStep2);
document.getElementById("subractButton").addEventListener("click", subtractStep2);
document.getElementById("multiplyButton").addEventListener("click", multiplyStep2);
document.getElementById("divideButton").addEventListener("click", divideStep2);

document.getElementById("taxButton").addEventListener("click", taxOutput)



