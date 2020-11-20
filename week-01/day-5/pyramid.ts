'use strict';


// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******        //(linecount*2)
//
// The pyramid should have as many lines as lineCount is


// go trhou each line
// draw * depending on where we are

let lineCount: number = 4;
let totalCharacters: number = (lineCount*2)

for (let i: number = 0; i < lineCount; i++){      //For each line do this:
  let answer: string = ''
  
  
  
  for (let j: number = 0; j < totalCharacters/2 - i; j++ ){   // print row/2 times " " characters
    answer = answer+ ' ';
  } 
  
  for (let k: number = 0;     k < (i + 1)*2-1 ;      k++) { //add * as many as +2 each lne
    answer = answer+ '*';   
  }    
  

console.log(answer);
}