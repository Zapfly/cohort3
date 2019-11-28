import {functions} from "./fetch.js"



const data = 
[
    { "name": "Maricica", "surname": "Ghinea", "gender": "female", "region": "Romania" }, 
    { "name": "Nishant", "surname": "Bhattarai", "gender": "male", "region": "Nepal" }, 
    { "name": "Nicuță", "surname": "Lotru", "gender": "male", "region": "Romania" }, 
    { "name": "Barbara", "surname": "Schneider", "gender": "female", "region": "United States" }, 
    { "name": "Stanca", "surname": "Grigoriu", "gender": "female", "region": "Romania" }, 
    { "name": "Bella", "surname": "Musker", "gender": "female", "region": "New Zealand" }, 
    { "name": "Fabian", "surname": "Dediu", "gender": "male", "region": "Romania" }, 
    { "name": "Славчо", "surname": "КОСТАДИНОВ", "gender": "male", "region": "Bulgaria" }, 
    { "name": "Upendra", "surname": "Ranjit", "gender": "male", "region": "Nepal" }, 
    { "name": "Dumitra", "surname": "Vicovean", "gender": "female", "region": "Romania" }
]


test('first name test', () => {
    expect(functions.getFirstName(data[0])).toEqual("Maricica")
    expect(functions.getFirstName(data[1])).toEqual("Nishant")
    expect(functions.getFirstName(data[4])).toEqual("Stanca")

})

test('all first names test', () => {
    const fnames = functions.getAllFirstNames(data)
    expect(fnames[0]).toEqual("Maricica")
    expect(fnames[1]).toEqual("Nishant")
    expect(fnames[4]).toEqual("Stanca")
})

test('failure to launch', () => {
    expect(functions.showDelayProblem()).toEqual(undefined)
})
