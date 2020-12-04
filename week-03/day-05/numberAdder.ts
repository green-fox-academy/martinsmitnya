//Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

function numberAdder(n):number{
  //Base case, if the n would be less than 1, the functions output should return 1
  if (n < 1) {
    return 1; 
  //Otherwise take n +add to it the previous number in the line(n-1);  
  }else {
    return n + numberAdder(n-1);
  }
}

console.log(numberAdder(3));