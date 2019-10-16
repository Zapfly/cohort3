//OCT 16

let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
export const farm = {
    xslice: () => {
       return animals.slice(2)
    },
    xsplice: () => {
        animals.splice(3, 2, 'horse');
        return animals
    },
    array2: [1, 3, 5, 6],
    xforEach: () => {
        let emptyArr = [];
        farm.array2.forEach(
            (x) => {
                let y = x + 2
                emptyArr.push(y);
            }
        );
        return emptyArr
    },
    xmap: () => {
        let dairyFarm = animals.map(x => x + " milk")
        return dairyFarm
    },
    xreduce: () => {
        let reducedArray = [1, 2, 12, 44];
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return reducedArray.reduce(reducer)
    },
    xfilter: () => {
        console.log(animals);
        const bigEnough = (x) => {
            if (x.length > 3) return true
            return false
        }
        const result = animals.filter(bigEnough);
        return result
    },
    xsort: () => {
        animals.push("aardvark");
        animals.push("cocaroach");
        animals.push("beaver");
        return animals.sort();
    }
}


//SECOND DAILY


export const functions = {
    makeEmailArr: (x) => {
        return x[0].toLowerCase() + "." + x[1].toLowerCase() + "@evolveu.ca";
    }
}

//OCT 15


export const basics = {
    xfor: () => {
        let testArray = [1, 2, 5, 7, 5];
        console.log(testArray)
        let i = 0;
        let emptyArray = [];
        for (i = 0; i < testArray.length; i++) {
            let x = testArray[i] + 2;
            emptyArray.push(x);
        }
        console.log(testArray);
        return emptyArray;
    },
    xwhile: () => {
        let testArray = [1, 2, 5, 7, 5];
        let i = 0;
        while (i < 6) {
            testArray.push(2);
            i++
        }
        return testArray;
    },
    xdoWhile: () => {
        let testArray = [1, 2, 5, 7, 5];
        let i = 0;
        do{
            testArray.push(3);
            i++
        } while (i < 6);
        return testArray;
    },
}


//FIRST DAILY
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

