
let equation = 0

const calculator = {
    num: (a) => {
        equation = equation + a
        console.log(a);
        console.log(equation)
        return equation        
    },

    equals: () => {
        () => {
            document.getElementById("screen").innerHTML = equation //must be changed to change display
        }
        equation = equation - equation
        return equation;
    },
    add: () => {
    }
}







export default calculator;