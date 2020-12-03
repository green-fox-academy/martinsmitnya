
/*
Create Sharpie class
We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
When creating an instance, we need to specify the color and the width
Every sharpie object is created with a default 100 as inkAmount
We can use() the sharpie objects which decreases inkAmount
*/


export class Sharpie {
  private _color:string;
  private _width:number;
  private _inkAmount:number;

  constructor(color:string, width:number){
    this._color = color;
    this._width = width;
    this._inkAmount = 100;
  };

  use(){
    this._inkAmount --;
  };

  emptyOut(){
    this._inkAmount = 0;
  };

  get inkLeft():number {
    return this._inkAmount;
  }



}

let pen = new Sharpie('blue', 1.01);

//console.log(pen);