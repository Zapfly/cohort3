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
            line6 = 6908;            
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
export {myCalculator, taxes};