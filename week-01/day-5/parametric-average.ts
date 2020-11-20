  
'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

let givenNumber: number = 5;
let i: number = 0;
let sum: number = null;
let average: number = null;

while (i<= givenNumber) {
  sum = sum + i;
  average = sum / i;
  i++
}

console.log ('Sum: ' + sum + ' Average: '+ average )