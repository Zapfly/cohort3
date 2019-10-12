//-----------MY CALCULATOR-----------//



 export const myCalculator = {
    add: (a, b) => {
        return a + b;
    },
    subtract: (a, b) => {
        return a - b;
    },
    multiply: (a, b) => {
        return a * b;
    },
    divide: (a, b) => {
        return a / b;
    },
    
 }

//---------CANADIAN TAXES---------//
let tax = 0;
 const Taxes = {
    taxStub: (income) => {
        if (income < 47630) tax = 15;

    }
}