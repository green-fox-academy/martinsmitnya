//Given a non-negative integer n, return the sum of its digits recursively (without loops).
 /// go trhou all eleements but if we reac tthe last one add and quit


function sumDigit(n:number):number{
  //Base case: if we reached the first digit return its value
  let stringValue:string = n.toString();
  let firstdigit:number = parseInt(stringValue[0]);
  let currentdigit:number  = parseInt(stringValue[stringValue.length-1])
  let nextNumber = parseInt( stringValue.slice(0, stringValue.length-1))

  console.log('fulll number is: ' + n +' first is: ' + firstdigit + ' current is: ' + currentdigit + ' nextNumber is ' + nextNumber);
  /*I tkae the number I got, parse it toString(). Determine the first number, set it to return the IF guard. 
  Determine the current (last) digit im looking at, and the next number that will be parsed and give it to function*/
  if ( n  === firstdigit) {
    return firstdigit;
  } else {
     return currentdigit + sumDigit(nextNumber);
  }
}

console.log(sumDigit(121691));