//Create a function that takes two strings,
// and returns a boolean that should be True if the strings are anagrams
// and False otherwise.

'use strict'
const test = require('tape');

function isAnagram(firstString, secondString) {
  let firstArray = [];
  let secondArray = [];

  //Missing strings or false length error handling
  if (!firstString) {
    return 'Missing string'

  } else if (!secondString) {
    return 'Missing string'
  } else if (firstString.length !== secondString.length) {
    return false
  }

  // Correct string comparison
  for (let i = 0; i < firstString.length; i++) {
    firstArray.push(firstString[i]);
    secondArray.push(secondString[i]);
  }
  firstString = firstArray.sort().toString();
  secondString = secondArray.sort().toString();

      console.log('THE STRING ARE : ', firstString, secondString);
  
  if (firstString === secondString) {
    return true
  } else {
    return false
  }

}



//Tests
test('String are anagramms, this shoud return true', (t) => {
  let actual = isAnagram('foobar', 'barofo');
  let expected = true;

  t.equal(actual, expected);
  t.end();

});

test('These string are NOT anagramms, this shoud return False', (t) => {
  let actual = isAnagram('foobar', 'joobar');
  let expected = false;

  t.equal(actual, expected);
  t.end();

});

test('These string are NOT same LENGTH, so not anagramms, this shoud return False', (t) => {
  let actual = isAnagram('foobar', 'sakdhlasduaskudjahgs');
  let expected = false;

  t.equal(actual, expected);
  t.end();

});

test('missing strings', (t) => {
  let actual = isAnagram();
  let expected = 'Missing string';

  t.equal(actual, expected);
  t.end();

});