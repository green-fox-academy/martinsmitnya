'use strict';

// Create a program that prints all the even numbers between 0 and 500

let i:number = 0;
while (i < 500) {
  if (i % 2 === 0){
    console.log (i + "PRINT!");
  } else {
    console.log(i);
  }

  i++;
}