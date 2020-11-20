  
'use strict';


// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is


// Determine linecount and halfpoint in the middle
let lineCount = 6;
let halfpoint = 0;
if (lineCount % 2 === 0) {
  halfpoint = lineCount / 2
} else { halfpoint = lineCount / 2 + 0.5 }

console.log('linecount: ' + lineCount)
console.log('halfpoint: ' + halfpoint);

let i = 0;    //i iterator outside of loops!

//First loop draws till half point
while (i < halfpoint- lineCount%2) {
  let answer = ''

  for (let j = 0; j < (lineCount + 1) - i; j++) {   // print currentLine/2 times " " characters
    answer = answer + j;
  }
  for (let k = 0; k < (i + 1) * 2 - 1; k++) { //add  The line we are on(i+1) times *2 minus-1'*' 
    answer = answer + '*';
  }
  console.log(answer);
  i++
}

if (lineCount % 2 === 0) {
  i--;
}

//Second loop draws THE HALFPOINT AND from halfpoint downwards
while (halfpoint >= i && i >= 0 ) {
  let answer = ''
  
  for (let j = 0; j < lineCount +1 - i; j++) {   // print currentLine/2 times " " characters
  answer = answer + '.';
}
for (let k = 0; k < (i + 1) * 2 - 1; k++) { //add  The line we are on(i+1) times *2 minus-1'*' 
answer = answer + '*';
}
console.log(answer);
i--
}
console.log(i);