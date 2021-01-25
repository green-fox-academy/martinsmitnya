'use strict';

// Create a promise. Have it fulfilled with a value of 'FULFILLED!' in
// executor after a delay of 300ms, using setTimeout.

// Then, print the contents of the promise after it has been fulfilled by passing
// console.log to then.

var promise = new Promise(function (fulfill, reject) {
  setTimeout( 
    () => {
      fulfill('FULFILLED!') 
    }, 300);
  
})
.then( (result) =>  console.log(result));

// console.log(promise)


// Your solution here
// promise-it-wont-hurt run program.js
// promise-it-wont-hurt verify program.js