console.log("Hello World from basic.js")

function input() {
	let inputValue = document.getElementById("text").value;
	let output = parseInt(inputValue);
	console.log(output + 1);
	size(output);
}

function onButtonClicked() {
	console.log("I'm the button click event")
	input()
}


function size(num){
	if(num < 10) {
		console.log("small")
	} else if (num >= 10 && num <= 19) {
		console.log("med");
	} else {
		console.log("big");
	}
}

function mouseOver (){
	document.getElementById("h1Id").innerHTML = "Hello Canada from HTML";
}

document.getElementById("h1Id").addEventListener("mouseover", mouseOver);

document.getElementById("button").addEventListener("click", onButtonClicked);



