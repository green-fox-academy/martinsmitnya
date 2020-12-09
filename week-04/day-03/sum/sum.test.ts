'use strict'
import * as test from 'tape';

// Create a sum method in your class which has a list of integers as parameter
// It should return the sum of the elements in the list

// Follow these steps:
// Add a new test case
// Instantiate your class
// create a list of integers
// use the t.equal to test the result of the created sum method
// Run it

// Create different tests where you test your method with:
// an empty list
// a list that has one element in it
// a list that has multiple elements in it
// Run them
// Fix your code if needed

class Adder {
  sum(numbers: number[]):number {
    let result:number = null;
    for (let i: number = 0; i < numbers.length; i++) {
      result += numbers[i];
    }
   return result 
  }

}


test('Testing of the summs', t => {
  let myArray = [1, 2, 4, 3, -7, 5, -8, 10];
  let example = new Adder;

  let actual = example.sum(myArray);
  let expceted = 10; 

  t.equal(actual, expceted);
  t.end();
});



test('Testing with no element in array', t => {
  let myArray = [];
  let example = new Adder;

  let actual = example.sum(myArray);
  let expceted = null; 

  t.equal(actual, expceted);
  t.end();
});