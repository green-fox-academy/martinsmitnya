let names: string[] = [];
//Print out the number of elements in the list
console.log (names.length);

//Add William to the list
names.push('William');
//Print out whether the list is empty or not
if (names.length === 0) {
  console.log('empty');
}else {
  console.log('not empty');
}

//Add John to the list
//Add Amanda to the list
names.push('John', 'Amanda');
//Print out the number of elements in the list
console.log (names.length);
//Print out the 3rd element
console.log (names[2]);


//Iterate through the list and print out each name
for (let i:number = 0; i < names.length; i++) {
  console.log(`${names[i]}`);
}

//Iterate through the list and print

for (let i:number = 0; i < names.length; i++) {
  console.log(`${i+1}: ${names[i]}`);
}

`/n`
//Remove the 2nd element
names.splice(1, 1);

//Iterate through the list in a reversed order and print out each name
for (let i:number = names.length-1; i >= 0; i--) {
  console.log(`${i+1}: ${names[i]}`);
}

//Remove all elements
names.splice(0, names.length);
console.log(`Removed: ${names}`);