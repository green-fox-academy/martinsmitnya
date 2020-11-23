
// Write a function called `sum` that returns the sum of numbers from zero to the given parameter


function sum (until:number) {
  let summed:number = 0;
  for (let i:number = 0; i <= until; i++) {
    summed += i;
  }
  return summed
}

console.log(sum(10));