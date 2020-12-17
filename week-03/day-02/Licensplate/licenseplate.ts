// if the licence plate starts with a vowel, the word also has to start with the same vowel

// if it starts with a consonant, it can start with any vowel but
// after the vowel(s) this consonant should come

// after vowels if the next letter on the licence plate is a consonant then
// this consonant should come as next, if the next letter on the 
//licence plate is a vowel other consonants can come between them

// after consonants if the next letter on the licence plate is a consonant then
// any vowel(s) can come between them but if the next character in the licence plate is a vowel then
// no other letter can come between them

// the licence plate can contain a 2-5 letter long string and no numeric values, only alphabetical

'use strict'
const fs = require('fs');

let fileContent:string;
try {
  fileContent = fs.readFileSync('./source.txt', 'utf-8');
} catch(e) {
  console.log('Something went wrong ', e);
}

let re =/[^a-zA-Z]/g; //select Everything NOT letter
let t = /\t/g;       //select Tabs
let rn = /\r\n/g;   //select Line breaks

//Replace \t with '.'
fileContent = fileContent.replace(t, '.');
//Replace \r\n with '.'
fileContent = fileContent.replace(rn, '.');
//Split string into array
let wordsInOneString: string[] = fileContent.split(' ');

//console.log(wordsInOneString); //This is an Array with 1 string in it!

function similarWord (licensePlate:string) {
  let result: string[] = []
  let vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  let consontants: string[] = ['q', 'w', 'r' , 't', 'z','p', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'y', 'x', 'c', 'v', 'b', 'n', 'm'];
  let input:string[] = wordsInOneString[0].split('.');
  //Go through every word in the array and put them into a result array
  for (let i = 0; i < input.length; i++) {
    // if the licence plate starts with a vowel, the word also has to start with the same vowel
    for (let letter = 0; letter < vowels.length; letter++) {
      if (licensePlate[0] === vowels[letter]) {
        if(input[i][0] === vowels[letter]) {
          result.push(input[i]);
        }
      }
    }//end of vowelschecker

    // if it starts with a consonant, it can start with any vowel but
    for (let letter = 0; letter < consontants.length; letter++) {
      if (licensePlate[0] === consontants[letter]) {
        if (input[i][1] === consontants[letter]) {
          result.push(input[i]); 
        }
      }
    }//end of consontants checker

  }//End of words
  return result

}
console.log(similarWord('pens'));