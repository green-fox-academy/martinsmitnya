
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
console.log('START: ' + diceSet.getCurrent());


while (diceSet.getCurrent(0) !== 6 || diceSet.getCurrent(1) !== 6 || diceSet.getCurrent(2) !== 6 || diceSet.getCurrent(3) !== 6 || diceSet.getCurrent(4) !== 6 || diceSet.getCurrent(5) !== 6) {
  //With a for loop I go trhout all 6 dice elements
  for (let j: number = 0; j < 6; j++) {
    if (diceSet.getCurrent(j) !== 6) {
      diceSet.reroll(j);
    }

  }
  
}


console.log(diceSet.getCurrent());



/*diceSet.getCurrent() !== [6, 6, 6, 6, 6, 6*/
//console.log(diceSet.getCurrent() + ' is not equal to ' + [6, 6, 6, 6, 6, 6]);





