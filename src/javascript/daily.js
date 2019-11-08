

export const functions = {
    //2019-11-08

    provLoop: (array) => {

        const abBc = array.filter(elem => 
            {return elem.province == "AB" || elem.province == "BC"});
        const mapArr = abBc.map(elem => 
            {return `${elem.fname} ${elem.lname}`}
        );
        return mapArr

    },

    // 2019-11-6

    bigBalances: (staffArray) => {
        const over1k = staffArray.filter(elem => elem.balance >= 1000)
        const balanceArr = over1k.map(elem => elem.balance);


        return balanceArr;
    },
    //OCT 29
    getBalance: (obj) => {
        return obj.balance
    },

    balanceTotal: (array) => {
        const map1 = array.map(x => functions.getBalance(x) );

        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return map1.reduce(reducer)
    },

    balanceAverage: (array) => {
        let total = functions.balanceTotal(array);
        return total / array.length;
    },



    //OCT 25
    loopStaffMap: (array) => {
        const mapped = array.map(x => (functions.makeEmailObj(x)))
        return mapped
    },

    loopStaffForEach: (array) => {
        let mtArray = [];
        array.forEach(item => {
            mtArray.push(functions.makeEmailObj(item));
        })
        return mtArray;
    },

    //OCT 24
    loopStaffIn: (array1) => {
        let emptyArr = []
        for (var object in array1) {
            emptyArr.push(functions.makeEmailObj(array1[object]));                   
        }
        return emptyArr
    },
    loopStaffOf: (array1) => {
        let emptyArr = []
        for (const element of array1) {
            let email = functions.makeEmailObj(element)
            emptyArr.push(email);
          }


        return emptyArr
    },

    // OCT 21
    loopStaff: (array) => {
        let mtArray = [];
        array.forEach(item => {
            mtArray.push(functions.makeEmailObj(item));
        })
        return mtArray;      
    },
    //OCT 11

    makeEmailObj: (name) => {
        
        return String(name.fname.toLowerCase() + "." + name.lname.toLowerCase() + "@evolveu.ca");
    },
    //Second Daily


    makeEmailArr: (x) => {
        return x[0].toLowerCase() + "." + x[1].toLowerCase() + "@evolveu.ca";
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
        do {
            testArray.push(3);
            i++
        } while (i < 6);
        return testArray;
    },
    xforin: () => {
        var string1 = "";
        var object1 = { a: 1, b: 2, c: 3 };
        for (var property1 in object1) {
            string1 += object1[property1];
        }
        return string1;
    },
    xforOf: () => {
        const array1 = ['a', 'b', 'c'];
        for (const element of array1) {
            return element;
        }
    }
}