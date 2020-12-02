/*
Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
when creating a new animal object these values are created with the default 50 value
Every animal can eat() which decreases their hunger by one
Every animal can drink() which decreases their thirst by one
Every animal can play() which increases both by one
*/

class Animal {
  _hunger:number;
  _thrist:number;

  constructor(hunger?: number, thirst?:number){
    if (hunger) {
      this._hunger = hunger;
    } else {
      this._hunger = 50}

    if (thirst) {
      this._thrist = thirst;
    } else {
      this._thrist = 50}
  }
  //METHODS
  eat(){
    this._hunger -= 1;

  };
  drink(){
    this._thrist -= 1;
  };
  play(){
    this._thrist ++;
    this._hunger ++;
  }

}

let tiger = new Animal(100, 100);
console.log(tiger);

tiger.eat();
tiger.drink();
console.log(tiger);
tiger.play();
console.log(tiger);