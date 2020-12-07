// GARDEN, Flowers (color) watering funcion, Tree (color) clases
/*
The Garden
is able to hold unlimited amount of flowers or trees
when watering it should only water those what needs water with equally divided amount amongst them
eg. watering with 40 and 4 of them need water then each gets watered with 10
*/

class Garden {
  protected _trees: Tree[];
  protected _flowers: Flower[];
  protected _name:string;

  constructor (name:string) {
    this._name = name ?? 'myDefaultGardenName'
  }

  public addTrees (tree:Tree) {
    this._trees.push(tree);
  }
  public addFlowers (flower:Flower) {
    this._flowers.push(flower);
  }

  public watering (waterAmount:number) {
    console.log(`Watering with ${waterAmount}`);
    //when watering it should only water those what needs water with equally divided amount amongst them
  }


}


/*
The Tree
needs water if its current water amount is less then 10
when watering it the tree can only absorb the 40% of the water
eg. watering with 10 the tree's amount of water should only increase with 4
*/

class Tree {
  protected _color:string;
  protected _waterLevel: number;

  constructor (color:string) {
    this._color = color;
    this._waterLevel = 0;
  }

  checkWaterLevelOfTree () {
    if (this._waterLevel < 10) {
      console.log(`The ${this._color} Tree needs water`);
    }else {
      console.log(`The ${this._color} Tree doesnt need water`);
    }
  }

  wateringTree(waterAmount:number) {
    this._waterLevel += waterAmount*0.4; 
  }
}



/*
The Flower
needs water if its current water amount is less then 5
when watering it the flower can only absorb the 75% of the water
eg. watering with 10 the flower's amount of water should only increase with 7.5
*/


class Flower {
  protected _color:string;
  protected _waterLevel: number;

  constructor (color:string) {
    this._color = color;
    this._waterLevel = 0;
  }
  
  checkWaterLevelOfFlower () {
    if (this._waterLevel < 5) {
      console.log(`The ${this._color} Flower needs water`);
    }else {
      console.log(`The ${this._color} Flower doesnt need water`);
    }
  }
  
  wateringFlower(waterAmount:number) {
    this._waterLevel += waterAmount*0.75; 
  }

}