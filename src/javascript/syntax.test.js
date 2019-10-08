import conjunctionsAndDisjunctions from './syntax.js'
import myAnd from './syntax.js'

test('Check the script', () => {
    expect(conjunctionsAndDisjunctions.myNot(true)).toBe(false);
    expect(conjunctionsAndDisjunctions.myNot(false)).toBe(true); 
  
    expect(conjunctionsAndDisjunctions.myOr(false, false)).toBe(false); 
    expect(conjunctionsAndDisjunctions.myOr(false, true)).toBe(true); 
    expect(conjunctionsAndDisjunctions.myOr(true, false)).toBe(true); 
    expect(conjunctionsAndDisjunctions.myOr(true, true)).toBe(false); 

    expect(conjunctionsAndDisjunctions.myAnd(true, true)).toBe(true); 
    expect(conjunctionsAndDisjunctions.myAnd(true, false)).toBe(false);
    expect(conjunctionsAndDisjunctions.myAnd(false, false)).toBe(true);
      

});