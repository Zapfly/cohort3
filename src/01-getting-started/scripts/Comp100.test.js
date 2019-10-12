import {myCalculator} from './Comp100.js'

test('Check Calculator', () => {
    expect(myCalculator.add(1, 2)).toBe(3);
    expect(myCalculator.add(10, 4)).toBe(14);
    expect(myCalculator.add(-12, 16)).toBe(4);

    expect(myCalculator.subtract(1, 2)).toBe(-1);

    expect(myCalculator.multiply(9, 2)).toBe(18);

    expect(myCalculator.divide(9, 2)).toBe(4.5);      
})