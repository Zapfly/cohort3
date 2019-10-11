/*
--------------- Copy this section into your code syntax.js as comments --------

define attributes / variables
number
string
boolean
array
dictionary / objects
undefined
sample if / else
functions
parameters
returns
arrays
add to the front
add to the end
update values??
loops 
for
for/in
while
do while
forEach (with array and function)
Objects / Dictionaries
declare object
lookup key to retrieve value

--------------- Copy ends here --------

*/

export const functions = {
    // variables
    variables: (a) => {
        if (a === "variable") return "var is a variable that is accessible anywhere"
        if (a === "let") return "let is a variable that is only accessible within its respective scope";
        if (a === "constant") return "a constant is a variable that can not be overwritten later"
        return "Sorry, that is not a kind of variable"
    },
    //number
    number: (a) => {
        if (Number.isInteger(a)) return "This is a number"  
        return "This is not a number"      
    },
    // string
    xstring: () => {
        return "a string is always between single quotes or double quotes";
    },
    //boolean
    //see not-or.js and not-or.test.js

    array: (a) => {
        let ar1 = [1, 2, 3, 4, a, "12", {obj: "one"}]
        return ar1[4];
    },

    //dictionary / objects

    obj: (a) => {
        let object = {
            name: "john",
            password: "dogsname",
            email: "john@dogsname.ca",
        }
        if (a == name) return object.name;
        return undefined
    },
    // undefined
    xundefined: () => {

    },
    //sample if/else statement

    ifElse: (a, b, c) => {
        let biggest = a;
        if (biggest < b) biggest = b;
        if (biggest < c) biggest = c;
        return biggest
    },
    //functions

    xfunctions: (a, b) => {
        let add = a + b;
        return add;
    },
    // parameters
    // Parameters go in the brackets when
    //  establishing or calling a function.

    //returns
    returns: () => {
        return "return"
    },
    //ARRAYS
    
        basicArray: [0],
    //add to front

    addToFront: (x) => {
        functions.basicArray.unshift(x)
        return functions.basicArray;
    },

    // add to end

    addToBack: (x) => {
        functions.basicArray.push(x)
        return functions.basicArray;
    },

    // update values??

    //LOOPS
    //for
    xfor: (x) => {
        let i = 0;
        for (i = 0; i < 1; i++) {
            return x;
        }
    }
    //for/in
    //while
    //do while
    //forEach (with array and function)
    //Objects / Dictionaries
    //declare object
    //lookup key to retrieve value
}



