// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0


function divider (n:number) {
  if (n===0) {
    console.log('Fail');
  } else {
    let result: number = 10 / n;
    console.log(result);
  }
  
}

divider(0);