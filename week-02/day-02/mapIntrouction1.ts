//We are going to play with maps. Feel free to use the built-in methods where possible.
//Create an empty map where the keys are integers and the values are characters
let myMap = {};
//Print out whether the map is empty or not
console.log(Object.keys(myMap).length); //object.keys(myObbj) gives and array wich has .length


//Add the following key-value pairs to the map
//Key	Value
//97	a
//98	b
//99	c
//65	A
//66	B
//67	C

myMap = {
  '97':'a',
  '98':'b',
  '99':'c',
  '65':'A',
  '66':'B', 
  '67':'C'
};

console.log(myMap);


//Print all the keys
console.log(Object.keys(myMap));

//Print all the values
//THIS DOESNT WORK: Object.values(myMap); 
for (let i in myMap){
  console.log(myMap[i]); //for (<porprety> in <objName>) loop, obj[property]=Values, but just property =Keys
}

//Add value D with the key 68
myMap[68] = 'D';
console.log(myMap);

//Print how many key-value pairs are in the map
console.log(Object.keys(myMap).length)   //object.keys(myObbj) gives and array wich has .length

//Print the value that is associated with key 99
console.log(myMap[99]);

//Remove the key-value pair where with key 97
delete myMap[97];

//Print whether there is an associated value with key 100 or not
console.log(myMap.hasOwnProperty(100))

//Remove all the key-value pairs          //For in loop NEEEDS LET/CONST
for (let i in myMap){
  delete myMap[i];
}

console.log(myMap);
