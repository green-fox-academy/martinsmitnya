// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the 8 to 4 with the `.map` method 
// -  Print the fourth element as a test

let numbers:number[] = [1, 2, 3, 8, 5, 6];      //I have an array


function myFunction (i, x) {            //This fucntion converts arr[i] to value x
  numbers[i] = x;
  return numbers
}
myFunction(3, 4);   //call the function
console.log(numbers[3]);

numbers.map (myFunction(3, 98));    // .map solution dynamic
console.log(numbers[3]);

numbers.map (function converter() {numbers[3]=99; return numbers})    // .map solution
console.log(numbers[3]);