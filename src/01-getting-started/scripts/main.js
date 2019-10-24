import {myCalculator, taxes, arrays, provinces, functions} from './functions.js';


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

// ARRAY MANIPULATOR

const arrayButtons = {
    add: () => {
        let x = document.getElementById("array-number")
        arrays.add(Number(x.value));
        console.log(Number(x.value));
        x.value = 0;
    },
    show: () => {
        let x = arrays.show();
        document.getElementById("array-output").textContent = x
        console.log(x);
    },
    total: () => {
        let x = arrays.total();
        document.getElementById("array-output").textContent = x
        console.log(x);
    },
    clear: () => {
        let x = arrays.clear();
        document.getElementById("array-output").textContent = "Message Area"
    }
    
}

//PROVINCE LOOKUP

const dictionary = () => {
    let x = document.getElementById("search").value;
    let y = provinces.lookup(x);
    document.getElementById("dictionary-output").textContent = y;
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

document.getElementById("array-add").addEventListener("click", arrayButtons.add)
document.getElementById("array-show").addEventListener("click", arrayButtons.show)
document.getElementById("array-total").addEventListener("click", arrayButtons.total)
document.getElementById("array-clear").addEventListener("click", arrayButtons.clear)

document.getElementById("lookup").addEventListener("click", dictionary)