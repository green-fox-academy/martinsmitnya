  
'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

// This for loop goes through a string FROM THE BACK and pastes each character in a new srting
function reverse (text: string): string { 
  let newText:string = '';
  for (let i = text.length-1; i >= 0; i--) {
    newText = newText + text[i];
  }  
  return newText
}





console.log(reverse(toBeReversed));

export = reverse;