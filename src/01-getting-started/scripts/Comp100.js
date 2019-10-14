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
    lookup: (call) => {
        switch (call) {
            case "nl":
                return  "Newfoundland and Labrador"
                break;
            case "pei":
                return  "Prince Edward Island"
                break;
            case "ns":
                return  "Nova Scotia"
                break;
            case "nb":
                return  "New Brunswick"
                break;
            case "qc":
                return  "Quebec"
                break;
            case "ont":
                return  "Ontario"
                break;
            case "man":
                return  "Manitoba"
                break;
            case "sk":
                return  "Saskatchewan"
                break;
            case "ab":
                return  "Alberta"
                break;
            case "bc":
                return  "British Columbia"
                break;
            case "yt":
                return  "Yukon"
                break;
            case "nwt":
                return  "Northwest Territories"
                break;
            case "nvt":
                return  "Nunavut"
                break;
            default:
                return "Unknown"
        }
    },   
}


export {myCalculator, taxes, arrays, provinces};