import {functions, assertEquals, basics, farm} from './daily'


//2019-11-26

test('destructuring array', () => {
    const [first, second, third, fourth] = functions.imgArr
    expect(first.key).toEqual(1)
    expect(second.key).toEqual(2)
    expect(third.key).toEqual(3)
    expect(fourth.key).toEqual(4)
})

const people = [
	{fname:"Alex", lname:"Smith", province:"BC", age:33},
	{fname:"Angela", lname:"Jones", province:"AB", age:61},
	{fname:"Anne", lname:"Bird", province:"SK", age:35},
	{fname:"Brent", lname:"Riddle", province:"MN", age:79},
	{fname:"Byron", lname:"Cardenas", province:"BC", age:38},
	{fname:"Carrie", lname:"Ramirez", province:"AB", age:89},
	{fname:"Cheryl", lname:"Glenn", province:"SK", age:70},
	{fname:"Dima", lname:"Curry", province:"MN", age:67},
	{fname:"Dustin", lname:"Bullock", province:"BC", age:59},
	{fname:"Eva", lname:"Keiths", province:"AB", age:24},
	{fname:"Faith", lname:"Liu", province:"SK", age:46},
	{fname:"Fawad", lname:"Bowman", province:"MN", age:69},
	{fname:"Forest", lname:"Vaughn", province:"BC", age:52},
	{fname:"Giovanni", lname:"Browning", province:"AB", age:32},
	{fname:"Greg", lname:"Hogan", province:"SK", age:55},
	{fname:"Harpreet", lname:"Ramsey", province:"MN", age:18},
	{fname:"Ian", lname:"Fitzgerald", province:"BC", age:16},
	{fname:"James", lname:"Kramer", province:"AB", age:57},
	{fname:"Jarvis", lname:"Ortega", province:"SK", age:69},
	{fname:"Jawad", lname:"Huerta", province:"MN", age:35},
	{fname:"Jinbong", lname:"Robinson", province:"BC", age:26},
	{fname:"Jingnan", lname:"Hatfield", province:"AB", age:71},
	{fname:"Joe", lname:"Banks", province:"SK", age:37},
	{fname:"Kristina", lname:"Dalton", province:"MN", age:73},
	{fname:"Latora", lname:"Matthews", province:"BC", age:25},
	{fname:"Lauren", lname:"McClure", province:"AB", age:42},
	{fname:"Licedt", lname:"Rasmussen", province:"SK", age:30},
	{fname:"Linden", lname:"Pierce", province:"MN", age:68},
	{fname:"Luis", lname:"Price", province:"BC", age:23},
	{fname:"Marcela", lname:"Perez", province:"AB", age:20},
	{fname:"Marilou", lname:"Graham", province:"SK", age:32},
	{fname:"Matt", lname:"Novak", province:"MN", age:29},
	{fname:"Monica", lname:"Giles", province:"BC", age:34},
	{fname:"Niloufar", lname:"Carson", province:"AB", age:29},
	{fname:"Omar", lname:"Olson", province:"SK", age:69},
	{fname:"Roger", lname:"Woodard", province:"MN", age:84},
	{fname:"Roman", lname:"Swanson", province:"BC", age:21},
	{fname:"Seun", lname:"Kelly", province:"AB", age:60},
	{fname:"Shane", lname:"Frost", province:"SK", age:87},
	{fname:"Steven", lname:"Haynes", province:"MN", age:47},
	{fname:"Thomas", lname:"Hart", province:"BC", age:14},
	{fname:"Trent", lname:"Kerr", province:"AB", age:12},
	{fname:"Darrell", lname:"Koch", province:"SK", age:10},
	{fname:"Tylor", lname:"Torres", province:"MN", age:98}
];

//2019-11-21

test('total province stats', () => {
    expect(functions.population(people)).toEqual(44)
    expect(functions.totalAge(people)).toEqual(2045)
    expect(functions.averageAge(people)).toEqual(46.47727272727273)

    const peopleStats = functions.stats(people)
    expect(peopleStats.population).toEqual(44)
    expect(peopleStats.totalAge).toEqual(2045)
    expect(peopleStats.averageAge).toEqual(46.47727272727273)
})

//2019-11-08
const prov = functions.provLoop(people);

test('Albertans are better', () => {
  
    expect(prov[0]).toEqual("Alex Smith")
    expect(prov[1]).toEqual("Angela Jones")
    
})

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

// NOV 6
// 2019-11-6

test("find the balance >= 1000",() => {
    expect(functions.bigBalances(data.staff)).toEqual([1000, 1330]);
    });


//OCT 29

test('test getBalance', () => {
    expect(functions.getBalance(data.staff[2])).toEqual(1330)
})
const staffBalances = functions.balanceTotal(data.staff);
test('total staff balances', () => {
    expect(staffBalances).toEqual(3823)
    const avgBalances = functions.balanceAverage(data.staff);

    expect(avgBalances).toEqual(546.1428571428571)

})




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





