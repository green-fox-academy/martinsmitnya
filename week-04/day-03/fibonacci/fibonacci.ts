'use strict'

// Write a function that computes a member of the fibonacci sequence by a given index


export function fibonacciSequence (index:number): number{
  let result:number [] = [1, 1];

  for (let i = 2; i <= index; i++) {
    result [i] = result [i-2] + result [i-1];
  }
  return result[index-1]
  
};

console.log('FOR LOOP: ' + fibonacciSequence (45) );

