import * as test from 'tape'

// Write a function, that takes two strings and returns a boolean value 
// based on if the two strings are Anagramms or not.

function isAnagramm (a:string, b:string):boolean {
  let aCharacters: string[] = a.split('').sort();
  let bCharacters: string[] = b.split('').sort();
  let correctChars:number = 0;

  for (let i:number = 0; i<aCharacters.length; i++) {
    if (aCharacters[i] === bCharacters[i]) {
      correctChars++
    } 
  }

  if (correctChars === a.length) {
    return true
  }else {
    return false
  }

}


test('Testing the anagrams', t => {
  let actual:boolean = isAnagramm('dad', 'add');
  let expected:boolean = true;

  t.equal(actual, expected);
  t.end();

});
