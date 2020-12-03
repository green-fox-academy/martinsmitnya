/*
Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
countUsable() -> sharpie is usable if it has ink in it
removeTrash() -> removes all unusable sharpies
*/

import { Sharpie } from '../day-03/sharpie'

class SharpieSet {
  private _listOfSharpies: Sharpie[];
  private _usables: number = 0;

  constructor(items: Sharpie[]) {
    this._listOfSharpies = items;
  }

  countUsable():number {
    for (let i: number = 0; i < this._listOfSharpies.length; i++) {
      if (this._listOfSharpies[i].inkLeft > 0) {
        this._usables ++;        
      }
      
    }
    return (this._usables);
  };

  removeTrash() {
    for (let i: number = 0; i < this._listOfSharpies.length; i++) {
      if (this._listOfSharpies[i].inkLeft === 0) {
        this._listOfSharpies.splice(i, 1);
      }

    }
  }


}

//Creat new Sharpies and empty out s3
let s1: Sharpie = new Sharpie('red', 1.1);
let s2: Sharpie = new Sharpie('blue', 1.1);
let s3: Sharpie = new Sharpie('green', 1.1);
s3.emptyOut();
//Put them into and array and create new SharpieSet
let collection: Sharpie[] = [s1, s2, s3];
let mySet = new SharpieSet(collection);
console.log(mySet);

//Check the good ones
console.log('Usable ones are: ' + mySet.countUsable())

//Remove the empty ones and print out the object again
mySet.removeTrash();
console.log(mySet);

