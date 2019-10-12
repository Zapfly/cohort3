import functions from './functions.js';
import myCalculator from './Comp100.js';

const addStep2 = () => {
    let x = document.getElementById("input1").value;
    let y = document.getElementById("input2").value;
    z = Number(myCalculator.add(x, y));
    document.getElementById("output").textContent = z
}


// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

document.getElementById("addButton").addEventListener("click", addStep2);
document.getElementById("subractButton").addEventListener("click", myCalculator.subtract);
document.getElementById("multiplyButton").addEventListener("click", myCalculator.multiply);
document.getElementById("divideButton").addEventListener("click", myCalculator.divide);





