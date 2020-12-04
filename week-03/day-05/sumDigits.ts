//Given a non-negative integer n, return the sum of its digits recursively (without loops).
 /// go trhou all eleements but if we reac tthe last one add and quit


function sumDigit(n:number):number{
  //Base case: if we reached the first digit return its value
  let stringValue:string = n.toString();
  let firstdigit:number = parseInt(stringValue[0]);



  if ( sumDigit( parseInt( stringValue.slice(0, stringValue.length-1))       ) === firstdigit ){
    return firstdigit;
    // add the current digit AND the last digit together
  } else {
     return parseInt(stringValue[stringValue.length-1]) sumDigit(parseInt( stringValue.slice(0, stringValue.length-1) ));
  }

}

console.log(sumDigit(1234));


/* TESTING
let n = 12345

let stringValue:string = n.toString();
let firstdigit:number = parseInt(stringValue[0]);

let theEND = parseInt( stringValue.slice(0, stringValue.length-1));
theEND = parseInt( stringValue.slice(0, stringValue.length-1));
console.log(theEND, typeof theEND);

*/