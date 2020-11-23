  
// -  Create a variable named `names` with the following content:
//   `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `names`

let names: string[] = ["Arthur", "Boe", "Chloe"];

let container: string [] = [];  //createa container
container.push (names[0]); // I push the first element to the container to be stored
names[0] = names[2];      //Set the 0th index's value ot the 3rd
names[2] = container[0];  //Set the containers 0th value to the 3rd element of the array

console.log(container, names);