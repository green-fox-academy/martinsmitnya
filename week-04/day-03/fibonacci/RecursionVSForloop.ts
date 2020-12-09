'use strict'

//FOR LOOP
export function fibonacciSequence (index:number): number{
  let result:number [] = [1, 1];

  for (let i = 2; i <= index; i++) {
    result [i] = result [i-2] + result [i-1];
  }
  return result[index-1]
  
};

console.log('FOR LOOP: ' + fibonacciSequence (45) );



//RECURSION
export function fibonacciSequence2 (index:number): number{
  if (index <=2) {
    return 1
  }else {
    return fibonacciSequence2 (index - 1) + fibonacciSequence2 (index - 2);
  }

};
console.log('RECURSION ' +  fibonacciSequence2(45) );