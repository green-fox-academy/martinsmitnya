'use strict';

//Easy solution:

for (let i: number = 1; i<=100; i++) {
  if (i % 3===0 && i % 5 ===0) {
   console.log('FizzBuzz');
  }else if (i % 3 ===0) {
    console.log('Fizz');
  }else if (i % 5 ===0) {
    console.log('Buzz');;
  }else {
    console.log(i);
  }
}




// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

for (let i: number = 1; i<=100; i++) {
  let answer: any = '';
  if (i % 3 ===0) {
    answer = answer+ 'Fizz';    //Dividable by 3?
  }
  if (i % 5 ===0) {
    answer = answer+ 'Buzz';    //Dividable by 5?
  }else if (i % 3 > 0){     
    answer = answer+ i;         //Not %5 AND Not %3?
  }
  console.log(answer);
}