//-----------MY CALCULATOR-----------//



const myCalculator = {
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
 
 const taxes = {
    taxStub: (line1) => {
        let line4 = 0;
        let line2 = 0;
        let line6 = 0;
        if (line1 < 47630) {
            line4 = 0.15;
        } else if (line1 <= 95259) {
             line4 = 0.205;
             line2 = 47630;
             line6 = 7144.5
        } else if (line1 <= 147667) {
            line4 = 0.26;
            line2 = 95259;
            line6 = 16908;            
        } else if (line1 <= 210371) {
            line4 = 0.29;
            line2 = 147667;
            line6 = 30535;
        } else if (line1 > 210371) {
            line4 = 0.33;
            line2 = 210371;
            line6 = 48719;
        }
        let line3 = line1 - line2;
        let line5 = line4 * line3;
        let line7 = line5 + line6;        
        /*
        if (line1 <= 147667) line4 = 0.26;
        if (line1 <= 210371) line4 = 0.29;
        if (line1 > 210371) line4 = 0.33;*/            

        return line7;
    }
}

//---------ARRAY MANIPULATOR---------//
let myArray = []
const arrays = {
    add: (x) => {
        myArray.push(x);
        return myArray;
    },
    show: () => {
        return myArray;
    },
    total: () => {        
        let newTotal = myArray.reduce((acc, cur) => acc + cur);
        return newTotal;
    },
    clear: () => {
        myArray = [];
        return myArray;
    }
}

const provinces = {
    nl: "Newfoundland and Labrador",
    pei: "Prince Edward Island",
    ns: "Nova Scotia",
    nb: "New Brunswick",
    qc: "Quebec",
    ont: "Ontario",
    man: "Manitoba",
    sk: "Saskatchewan",
    ab: "Alberta",
    bc: "British Columbia",
    yt: "Yukon",
    nwt: "Nortwest Territories",
    nvt: "Nunavut"
    

}


export {myCalculator, taxes, arrays};