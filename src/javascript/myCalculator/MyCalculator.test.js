import calculator from './MyCalculator.js'


test('Does the Calculator work?', () => {
    expect(calculator.num(1)).toBe(1)
    expect(calculator.num(1)).toBe(2)

    expect(calculator.screen()).toBe()

    expect(calculator.equals()).toBe(0)
    expect(calculator.num(1)).toBe(1)

})