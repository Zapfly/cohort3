import conjunctions from './syntax.js'

test('Check the script', () => {
    expect(conjunctions.myNot(true)).toBe(false);
    expect(conjunctions.myNot(false)).toBe(true); 
  
    expect(conjunctions.myOr(false, false)).toBe(false); 
    expect(conjunctions.myOr(false, true)).toBe(true); 
    expect(conjunctions.myOr(true, false)).toBe(true); 
    expect(conjunctions.myOr(true, true)).toBe(false); 

    expect(conjunctions.myAnd(true, true)).toBe(true); 
    expect(conjunctions.myAnd(true, false)).toBe(false);
    expect(conjunctions.myAnd(false, true)).toBe(false);   
    expect(conjunctions.myAnd(false, false)).toBe(false);

    expect(conjunctions.newAnd(true, true)).toBe(true); 
    expect(conjunctions.myAnd(true, false)).toBe(false);
    expect(conjunctions.myAnd(false, true)).toBe(false);   
    expect(conjunctions.myAnd(false, false)).toBe(false);

});