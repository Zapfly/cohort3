console.log("Hello World from basic.js");


function printValue() {
    let text = document.getElementById("text1").value;
    let input = parseInt(text)
    console.log(input + " + 1 = " + (input + 1));

}

function size(num) {
    if (num < 10) {
        console.log("small")
    } else if (num <= 10 && num >= 19){
        console.log("med")
    } else {
        console.log("big")
    }
}

function onButtonClicked() {
    console.log("I'm in the button click event");
    printValue()
    size()
    
}

let button = document.getElementById("button").addEventListener("click", onButtonClicked)

