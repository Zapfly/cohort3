
function size (number) {
    if (number < 10) {
        console.log("small");
    } else if (number >= 10 && number < 19) {
        console.log("med");        
    } else {
        console.log("big");
    }
}


function onButtonClicked () {
    console.log("I'm in the button click event");
    let text1 = document.getElementById("text").value;
    let output = parseInt(text1);
    console.log(output + 1)
    size(output)
}

document.getElementById("button").addEventListener("click", onButtonClicked);

