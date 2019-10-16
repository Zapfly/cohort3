import {functions, assertEquals, basics} from './daily'

/*
test("Check script", () => {
    expect(assertEquals(1, 1)).toBe(true);
    expect(assertEquals("a", "b")).toBe("the two values are not the same");
    expect(assertEquals(1, 2)).toBe("the two values are not the same");
    expect(assertEquals(2, "2")).toBe("the two values are not the same");
}); 

/*
 //   Write a function to format an email based on an array.
*/
/*
test('email builder from an array', () => {
    const name = ["first", "last"];
    expect(functions.makeEmailArr(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["First", "Last"]))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailArr(["Bill", "Smith"]))
        .toEqual("bill.smith@evolveu.ca");
});
*/

//OCT 15

test('Prepare Array Work', () => {
    expect(basics.xfor()).toEqual([3, 4, 7, 9, 7]);
    expect(basics.xwhile()).toEqual([ 1, 2, 5, 7, 5, 2, 2, 2, 2, 2, 2 ]);
    expect(basics.xdoWhile()).toEqual([ 1, 2, 5, 7, 5, 3, 3, 3, 3, 3, 3 ]);

})