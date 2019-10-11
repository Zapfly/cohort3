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
update values
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

const conjunctions = {
    myNot: (x) => {
    if (x === true) return false
    return true
    },
    myOr: (a, b) => {
        if (a == false && b == false) return false;
        if (a == true && b == false) return true;
        if (a == false && b ==true) return true;
        return true
    },
    myAnd: (a, b) => {
        if (a == true && b == true) return true;
        return false
    },
    newAnd: (a, b) => {
        return conjunctions.myNot(
            conjunctions.myOr(
                conjunctions.myNot(a),conjunctions.myNot(b)
                )
            );
    },
}





export default conjunctions;
