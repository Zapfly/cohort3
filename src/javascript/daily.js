/*	
   Write the function that will create this output:

*** the two values are not the same:
   p1--> a
   p2--> b
*** the two values are not the same:
   p1--> 1
   p2--> 2
*** the two values are not the same:
   p1--> 2
   p2--> 2
*/

// Write the function after this comment ---

export const assertEquals = (p1, p2) => {
    if (p1 === p2) return true
    console.log(false)
    /*console.log("*** the two values are not the same” and also log the two parameters as follows:");
    console.log('“p1-->”' + p1);
    console.log('“p2-->”' + p2);*/
    return "the two values are not the same"
}


assertEquals("a", "b");
assertEquals("a", "a");
assertEquals(1, 2);
assertEquals(2, 2);
assertEquals("2", 2);
assertEquals("This value", "This value");

export const functions = {
    makeEmailArr: (x) => {
        return x[0].toLowerCase() + "." + x[1].toLowerCase() + "@evolveu.ca";
    }
}

//OCT 15
let emptyArray = [];

export const basics = {
    xfor: (y) => {
        console.log(y)
        let i = 0;
        emptyArray = []
        for (i = 0; i < y.length; i++) {
            let x = y[i] + 2;
            emptyArray.push(x);
        }
        console.log(y)
        return emptyArray;
    },

    confuse: (y) => {
        return y
    },
    xwhile: (a) => {
        let i = 7
        while (i < 4) {
            a.push(2);
            i = i++
        }
        return a;
    },
}