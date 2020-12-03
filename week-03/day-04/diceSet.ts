
class DiceSet {
  dice: number[];
  readonly numOfDices: number = 6;

  //Roll 6 d6 and put it into an array
  roll(): number[] {
    this.dice = [];
    for (let i = 0; i < this.numOfDices; i++) {
      this.dice.push(Math.floor(Math.random() * 6 + 1));
    }
    return this.dice;
  }

  //Roll [index] dice OR of htere is no index reroll all
  reroll(index?: number): void {
    if (index === undefined) {
      for (let i = 0; i < this.numOfDices; i++) {
        this.dice[i] = Math.floor(Math.random() * 6 + 1);
      }
    } else {
      this.dice[index] = Math.floor(Math.random() * 6 + 1);
    }
  }

  //Show the numbers of one dice [index given] or all dices
  getCurrent(index?: number): number[] | number {
    if (index === undefined) {
      return this.dice;
    } else {
      return this.dice[index];
    }
  }
}

// You have a `DiceSet` class which has a list for 6 dice
// You can roll all of them with roll()
// Check the current rolled numbers with getCurrent()
// You can reroll with reroll()
// Your task is to roll the dice until all of the dice are 6

/*
let diceSet = new DiceSet();
console.log(diceSet.roll());
console.log(diceSet.getCurrent());

console.log("------START------------");

diceSet.reroll();
console.log(diceSet.getCurrent());

console.log("------------------");

//console.log(diceSet.getCurrent(5));
diceSet.reroll();
console.log(diceSet.getCurrent());

console.log("------------------");

diceSet.reroll(4);
console.log(diceSet.getCurrent());
*/


let diceSet = new DiceSet();
diceSet.roll()
console.log(diceSet.getCurrent());


let i:number = 20;


while (true) {
  i--
  if (i === 0) {break};
  //With a for loop I go trhout all 6 dice elements
  for (let j: number = 0; j < 6; j++) {
    //console.log('WE START THE LOOP' + diceSet.getCurrent());
    if (diceSet.getCurrent(j) !== 6) {
      //console.log ('THIS IS NOT 6, it is: ' + diceSet.getCurrent(i));
      diceSet.reroll(j);
    }

  }console.log(diceSet.getCurrent());
  

}


console.log(diceSet.getCurrent());