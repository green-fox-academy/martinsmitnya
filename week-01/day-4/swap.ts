'use strict';

// Swap the values of these variables
let numberToSwap1: number = 123;
let numberToSwap2: number = 526;
// add storage
let storage: any = null;


//If not swapped, swaps n1 and n2 and clears storage
if (numberToSwap1 !== numberToSwap2) {
  storage = numberToSwap1;
  numberToSwap1 = numberToSwap2;
  numberToSwap2 = storage;
  storage = null;
}


console.log(numberToSwap1);
console.log(numberToSwap2);