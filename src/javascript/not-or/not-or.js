

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
