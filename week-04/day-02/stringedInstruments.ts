/*

We start with a base, abstract class Instrument.

it reserves (e.g. protected) the name of the instrument
it should provide a play() method.
Next, we add another abstract class, StringedInstrument which extends Instrument. It

introduces numberOfStrings and
sound() method what's implementation is yet unknown
but with the help of the sound() the play() method is fully implementable
StingedInstrument has 3 descendants, namely:

Electric Guitar (6 strings, 'Twang')
Bass Guitar (4 strings, 'Duum-duum-duum')
Violin (4 strings, 'Screech')
The Workshop should be invoked from another file like app.ts or main.ts
*/

export abstract class Instrument {
  protected _name:string;

  constructor (name:string) {
    this._name = name;
  }

  public abstract play():void;
}

export abstract class StringedInstrument extends Instrument {
  protected _numberOfStrings: number;

  constructor (name:string, numberOfStrings:number) {
    super(name);
    this._numberOfStrings = numberOfStrings;
  }

  public abstract sound():string;
}



//REAL classes
export class ElectricGuitar extends StringedInstrument {
  protected _sound:string = 'Twang';

  constructor (numberOfStrings?:number, name?:string) {
    super (name ?? 'Electric Guitar', numberOfStrings ?? 6);
  }
  public play() {
    console.log(`${this._name} a ${this._numberOfStrings} stringed instrument that goes`, this.sound());
  }
  public sound():string {
    return this._sound
  }

}

export class BassGuitar extends StringedInstrument {
  protected _sound:string = 'Duum-duum-duum';

  constructor (numberOfStrings?:number, name?:string) {
    super (name ?? 'Bass Guitar', numberOfStrings ?? 4);
  }
  public play() {
    console.log(`${this._name} a ${this._numberOfStrings} stringed instrument that goes`, this.sound() );
  }
  public sound():string {
    return this._sound
  }

}

export class Violin extends StringedInstrument {
  protected _sound:string = 'Screech';

  constructor (numberOfStrings?:number, name?:string) {
    super (name ?? 'Violin', numberOfStrings ?? 4);
  }
  public play() {
    console.log(`${this._name} a ${this._numberOfStrings} stringed instrument that goes ${ this.sound()}`);
  }
  public sound():string {
    return this._sound
  }

}

//TESTING

console.log(
  'Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.'
);
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

console.log(
  'Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings.'
);
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();