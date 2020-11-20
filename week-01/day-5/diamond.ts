  
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


for (let i = 0; i < lineCount/2 + lineCount%2; i++){      //For each line do this:
  let answer = ''
  console.log('Line:' + i)

  for (let j = 0; j < (lineCount +1)- i; j++ ){   // print currentLine/2 times " " characters
    answer = answer+ j;
  } 
  for (let k = 0;     k < (i + 1)*2-1 ;      k++) { //add  The line we are on(i+1) times *2 minus-1'*' 
    answer = answer+ '*';   
  }
console.log(answer);
}

//Second loop draws from halfpoint downwards
for (let i = 0;  lineCount/2 + lineCount%2 < i > lineCount; i++){      //For each line do this:
  let answer = ''
  console.log('Line:' + i)

  for (let j = 0; j < (lineCount +1)- i; j++ ){   // print currentLine/2 times " " characters
    answer = answer+ j;
  } 
  for (let k = 0;     k < (i + 1)*2-1 ;      k++) { //add  The line we are on(i+1) times *2 minus-1'*' 
    answer = answer+ '*';   
  }
console.log(answer);
}