import {myCalculator, taxes, arrays, provinces} from './Comp100.js'

test('Check Calculator', () => {
    expect(myCalculator.add(1, 2)).toBe(3);
    expect(myCalculator.add(10, 4)).toBe(14);
    expect(myCalculator.add(-12, 16)).toBe(4);

    expect(myCalculator.subtract(1, 2)).toBe(-1);

    expect(myCalculator.multiply(9, 2)).toBe(18);

    expect(myCalculator.divide(9, 2)).toBe(4.5);      
})

test('Check tax Calculator', ()=> {
    expect(taxes.taxStub(1)).toBe(0.15);
    expect(taxes.taxStub(2)).toBe(0.30);
    expect(taxes.taxStub(50000)).toBe(7630.35);
    expect(taxes.taxStub(100000)).toBe(18140.66);
    expect(taxes.taxStub(150000)).toBe(31211.57);
    expect(taxes.taxStub(250000)).toBe(61796.57);
})

test('Check Arrays', () => {
    expect(arrays.add(1)).toEqual([1]);    
    expect(arrays.add(10)).toEqual([1, 10]);    
    expect(arrays.add(3)).toEqual([1, 10, 3]);
    expect(arrays.total()).toEqual(14);      
    expect(arrays.add(1)).toEqual([1, 10, 3, 1]);    
    expect(arrays.show()).toEqual([1, 10, 3, 1]);    
    expect(arrays.total()).toEqual(15);    
    expect(arrays.clear()).toEqual([]);    
})

test('Check Province Lookup', () => {
    expect(provinces.lookup()).toEqual("Unknown");        
    expect(provinces.lookup("nl")).toEqual("Newfoundland and Labrador");        
    expect(provinces.lookup("pei")).toEqual("Prince Edward Island");        
    expect(provinces.lookup("ns")).toEqual("Nova Scotia");        
    expect(provinces.lookup("nb")).toEqual("New Brunswick");        
    expect(provinces.lookup("qc")).toEqual("Quebec");        
    expect(provinces.lookup("ont")).toEqual("Ontario");        
    expect(provinces.lookup("man")).toEqual("Manitoba");        
    expect(provinces.lookup("sk")).toEqual("Saskatchewan");        
    expect(provinces.lookup("ab")).toEqual("Alberta");        
    expect(provinces.lookup("bc")).toEqual("British Columbia");        
    expect(provinces.lookup("yt")).toEqual("Yukon");        
    expect(provinces.lookup("nwt")).toEqual("Northwest Territories");        
    expect(provinces.lookup("nvt")).toEqual("Nunavut");        
})