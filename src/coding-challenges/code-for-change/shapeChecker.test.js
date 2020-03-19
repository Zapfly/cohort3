import shapeChecker from './shapeChecker'

// initial test
test('shapeCheck 1', () => {
    expect(shapeChecker.connection()).toEqual("something")
})

// identify the longest side
test('find longest side', () => {
    expect(shapeChecker.longest([1, 2, 3, 4])).toEqual(4)
    expect(shapeChecker.longest([1, 5, 2])).toEqual(5)
    expect(shapeChecker.longest([7, 4, 3, 2, 1])).toEqual(7)
    expect(shapeChecker.longest([1, 2, 1, 9])).toEqual(9)
    expect(shapeChecker.longest([1, 9, 9])).toEqual(9)
    

})

test('sum smaller numbers', () => {
    expect(shapeChecker.sumSmaller([100, 2, 3, 4])).toEqual(9)
    expect(shapeChecker.sumSmaller([1, 7, 3, 4])).toEqual(8)
    expect(shapeChecker.sumSmaller([1, 2, 3, 4])).toEqual(6)
    expect(shapeChecker.sumSmaller([1, 2, 1, 9])).toEqual(4)
    expect(shapeChecker.sumSmaller([1, 9, 9])).toEqual(10)

})

test('shapeCheck valid', () => {
    expect(shapeChecker.isValid([2, 7, 6])).toEqual(true)
    expect(shapeChecker.isValid([1, 9, 9])).toEqual(true)
})

test('shapeCheck not valid', () => {
    expect(shapeChecker.isValid([1, 2, 1, 9])).toEqual(false)
    expect(shapeChecker.isValid([1, 10, 4])).toEqual(false)
    expect(shapeChecker.isValid([12, 1, 1, 1, 1])).toEqual(false)
})