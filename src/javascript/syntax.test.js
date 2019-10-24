import {functions, Taxes} from './syntax.js'

test('Check the script', () => {
    expect(functions.variables("variable")).toBe("var is a variable that is accessible anywhere");
    expect(functions.variables("let")).toBe("let is a variable that is only accessible within its respective scope");
    expect(functions.variables("constant")).toBe("a constant is a variable that can not be overwritten later");
    expect(functions.variables("constants")).toBe("Sorry, that is not a kind of variable");

    expect(functions.number("1")).toBe("This is not a number");
    expect(functions.number(1)).toBe("This is a number");

    expect(functions.xstring(1)).toBe("a string is always between single quotes or double quotes");

    expect(functions.array(1)).toBe(1);

    expect(functions.obj()).toBe(undefined);
    expect(functions.obj(name)).toBe("john");

    expect(functions.xundefined()).toBe(undefined);

    expect(functions.ifElse(1, 1, 1)).toBe(1);
    expect(functions.ifElse(1, 2, 3)).toBe(3);
    expect(functions.ifElse(3, 2, 1)).toBe(3);
    expect(functions.ifElse(2, 1, 3)).toBe(3);

    expect(functions.xfunctions(1, 2)).toBe(3);

    expect(functions.returns()).toBe("return");

    expect(functions.addToFront(1)).toEqual([1, 0]);
    expect(functions.addToFront(1)).toEqual([1, 1, 0]);

    expect(functions.addToBack(1)).toEqual([1, 1, 0, 1]);
    expect(functions.addToBack([1, 2, 3])).toEqual([1, 1, 0, 1, [1, 2, 3]]);

    expect(functions.xfor(6)).toBe(6);

    expect(functions.xforin()).toBe("123");

    expect(functions.xwhile()).toBe(10);

    expect(functions.xdowhile(0)).toBe(10);
    expect(functions.xdowhile(11)).toBe(12);

    expect(functions.xforEach(11)).toEqual([3, 5, 7, 8]);

    // expect(functions.xdictionary("nl")).toEqual("Newfoundland and Labrodon't");


})

