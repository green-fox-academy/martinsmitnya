// One copy of any of the five books costs 8 EUR.
'use strict';
const test = require('tape'); 





function costCalculator (inputArray) {
  //5 diferent books // If you go the whole hog, and buy all 5, you get a huge 25% discount.
  if (inputArray.length === 5) {
    return (inputArray[0] + inputArray[1] + inputArray[2] + inputArray[3] + inputArray[4]) * 8*0.75
    //4 diferent books // With 4 different books, you get a 20% discount. 
  } else if (inputArray.length === 4) {
    return (inputArray[0] + inputArray[1] + inputArray[2] + inputArray[3] ) * 8*0.8
    //3 diferent books // If you buy 3 different books, you get a 10% discount. 
  } else if (inputArray.length === 3) {
    return (inputArray[0] + inputArray[1] + inputArray[2] ) * 8*0.9
    //2 diferent books // Two different books get a 5% discount on those two books. 
  } else if (inputArray.length === 2) {
    return (inputArray[0] + inputArray[1] ) * 8*0.95
    
  }
}

test ('should return 15.2', (t) => {
  let actual = costCalculator([1, 1]);
  // console.log('ACTUAL IS ', actual);
  let expected = 15.2;

  t.equal(actual, expected);
  t.end();
});