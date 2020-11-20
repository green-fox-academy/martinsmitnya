'use strict';


// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is

let lineCount: number = 4;

for (let i:number= 0; i <= lineCount; i++) {  //Go through each line
  let answer: string = '';                    //Create an empty conatiner to draw in
  for (let j:number= 0; j < i; j++) {         //Draw as many * in the container as many lines we are on
    answer = answer + '*'
  }
  console.log(answer);                        // Print the *-s and go for next line in the loop
}