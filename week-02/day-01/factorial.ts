// -  Create a function called `factorio`
//    that returns it's input's factorial

function factorio (n:number): number {
  let factorValue:number = 1;
  for (let i:number = n; i > 1; i--) {   //Decrementation works with floats replace++: let i:number = 0; i < n; i++)
    factorValue *=i;
  }
  return factorValue
}

console.log(factorio(3.1));