import {functions, assertEquals, basics, farm} from './daily'
const data = {
    staff: [
        { fname: "Jane", lname: "Smith", balance: 10 },
        { fname: "Liam", lname: "Henry", balance: 1000 },
        { fname: "Emma", lname: "Jones", balance: 1330 },
        { fname: "Olivia", lname: "Notly", balance: 310 },
        { fname: "Noah", lname: "Ho", balance: 503 },
        { fname: "William", lname: "Lee", balance: 520 },
        { fname: "Benjamin", lname: "Amis", balance: 150 },
    ],
    company: "EvolveU",
    city: "Calgary",
    prov: "Alberta"
};

const emailTest = (x) => {
    expect(x[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(x[1])
        .toEqual("liam.henry@evolveu.ca");
    expect(x[6])
        .toEqual("benjamin.amis@evolveu.ca");
}

//OCT 25
const staffEmailMap = functions.loopStaffMap(data.staff)
test('Map loop', () => {
    emailTest(staffEmailMap)

})

const staffEmailForEach = functions.loopStaffForEach(data.staff)
test('forEach loop', () => {
    emailTest(staffEmailForEach)

})
//OCT 24

const staffEmailIn = functions.loopStaffIn(data.staff);
// Write your tests here
test('forIn loop', () => {
    emailTest(staffEmailIn)

})
const staffEmailOf = functions.loopStaffOf(data.staff);
// Write your tests here
test('forOf loop', () => {
    emailTest(staffEmailOf)

})



//OCT 21
/*
    Sample data for the next few exercises.
*/




/*	
	Write the function to build email addresses for the company.
*/


test('email builder for company', () => {


    const staffEmail = functions.loopStaff(data.staff);

    emailTest(staffEmail)

});


//OCT 16

test('Advanced Loops', () => {
    expect(farm.xslice()).toEqual(['camel', 'duck', 'elephant']);
    expect(farm.xsplice()).toEqual(['ant', 'bison', 'camel', 'horse']);
    expect(farm.xforEach()).toEqual([3, 5, 7, 8,]);

    expect(farm.xmap()).toEqual([ 'ant milk', 'bison milk', 'camel milk', 'horse milk' ]);
    expect(farm.xreduce()).toEqual(59);
    expect(farm.xfilter()).toEqual(["bison", "camel", "horse"]);
    expect(farm.xsort()).toEqual([ 'aardvark', 'ant', 'beaver', 'bison', 'camel', 'cocaroach', 'horse' ]);

})

//OCT 15

test('Prepare Array Work', () => {
    expect(basics.xfor()).toEqual([3, 4, 7, 9, 7]);
    expect(basics.xwhile()).toEqual([ 1, 2, 5, 7, 5, 2, 2, 2, 2, 2, 2 ]);
    expect(basics.xdoWhile()).toEqual([ 1, 2, 5, 7, 5, 3, 3, 3, 3, 3, 3 ]);
    expect(basics.xforin()).toEqual("123");
    expect(basics.xforOf()).toEqual("a");
})

//OCT 11

test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});


//second daily
/*
 //   Write a function to format an email based on an array.
*/

test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});

// First daily

test("Check script", () => {
    expect(assertEquals(1, 1)).toBe(true);
    expect(assertEquals("a", "b")).toBe("the two values are not the same");
    expect(assertEquals(1, 2)).toBe("the two values are not the same");
    expect(assertEquals(2, "2")).toBe("the two values are not the same");
}); 





