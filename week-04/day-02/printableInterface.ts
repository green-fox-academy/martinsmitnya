// Create a new class called Domino that has two integer fields that represents the two sides of a domino
// Create a new class called Todo that has three fields representing the task as a string, the priority as string and whether it is done or not as a boolean

// Create a new interface called Printable
// It should have one method definition called printAllFields

// Implement this interface on the Domino and Todo classes
// The domino should have the following string representation: Domino A side: 3, B side: 2
// The todo should have the following string representation: Task: Buy milk | Priority: high | Done: true

'use strict'


class Domino implements Printable{
  protected _sideA:number;
  protected _sideB:number;

  constructor(sideA:number, sideB:number) {
    this._sideA = sideA;
    this._sideB = sideB;
  }

  printAllFields():void {
    console.log(`Domino A side ${this._sideA}, B side: ${this._sideB}`)
  }

}

class Todo implements Printable{
  protected _task:string;
  protected _priority:string;
  protected _isDone:boolean;
  
  constructor(task:string, priority:string, isDone:boolean) {
    this._task = task;
    this._priority = priority;
    this._isDone = isDone;
  }

  printAllFields():void {
    console.log(`Task: ${this._task} | Priority: ${this._priority} | Done: ${this._isDone}`)
    
  }

}

interface Printable {
  printAllFields():void;
}


let D = new Domino (3, 9);
let Day1 = new Todo ('Cook Cacio e pepe', 'High', false);

D.printAllFields();
Day1.printAllFields();