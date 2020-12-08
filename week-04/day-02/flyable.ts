// Create a Flyable interface
// it should have land, fly and takeOff methods (TakeOff in C#)

// Create an abstract Vehicle class
// it should have at least 3 fields

// Extend Helicopter class from Vehicle
// implement your Flyable interface

// Extend Bird from your abstract Animal class (zoo exercise)
// implement your Flyable interface

'use strict'

interface Flyable {
  Land();
  Fly();
  TakeOff();
}

abstract class Vehicle {
  _name:string;
  _make:string;
  _age:number;

  constructor (name: string, make: string, age:number){
    this._name = name;
    this._make = make;
    this._age = age;
  }

}

class Helicopter extends Vehicle implements Flyable {

  constructor (name: string, make: string, age:number) {
    super(name, make, age);
  }
  Land():void {
    console.log('Landing');
  }
  Fly():void  {
    console.log('Fyling');
  }
  TakeOff():void {
    console.log('Prepare to TakeOff');
  }

}

let Apache = new Helicopter('AH-64 Apache', 'Boeing', 0)
Apache.TakeOff();
Apache.Fly();
Apache.Land();
