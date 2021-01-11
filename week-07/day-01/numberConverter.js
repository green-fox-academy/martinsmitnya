// Write a converter function to convert numbers into words.
// Convert it back.
'use strict'

const test = require('tape');

function converter(numbers) {
  let indexWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',
   'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred'];
  let words = 'No input';

  // Until 19
  if (numbers <21) {
    return indexWords[numbers];
    
  } else if (21 <= numbers < 100) {
    let numbersString = numbers.toString();
    let numberArray = numbersString.split('');
    //20, 30 40... 90
    if (numbers === 20 || numbers === 30 || numbers === 40 || numbers === 50 || numbers === 60 || numbers === 70 || numbers === 80 || numbers === 90) {
      return indexWords [18 + parseInt(numberArray[0])]
      //21, 22, 23... 99
    } else {
      numberArray[0] = indexWords[18 + parseInt(numberArray[0])]
      numberArray[1] = indexWords[0 + parseInt(numberArray[1])]
      words = numberArray[0] + numberArray[1];

    }
  }

  return words
}



test ('5', (t) => {
  let actual = converter(5);
  let expected = 'five';

  t.equal(actual, expected);
  t.end();
});

test ('40', (t) => {
  let actual = converter(40);
  let expected = 'fourty';

  t.equal(actual, expected);
  t.end();
});


test ('99', (t) => {
  let actual = converter(99);
  let expected = 'ninetynine';

  t.equal(actual, expected);
  t.end();
});
