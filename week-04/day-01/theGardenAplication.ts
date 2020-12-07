// GARDEN, Flowers (color) watering funcion, Tree (color) clases
/*
The Garden
is able to hold unlimited amount of flowers or trees
when watering it should only water those what needs water with equally divided amount amongst them
eg. watering with 40 and 4 of them need water then each gets watered with 10
*/

class Garden {
  // protected _trees: Tree[];
  // protected _flowers: Flower[];
  protected _plants:(Flower | Tree)[];
  protected _name:string;

  constructor (name:string) {
    this._name = name ?? 'myDefaultGardenName'
    this._plants = [];
  }

  /*
  public addTrees (tree:Tree) {
    this._trees.push(tree);
  }
  public addFlowers (flower:Flower) {
    this._flowers.push(flower);
  }
  */
 public addPlant (plant: (Flower | Tree)) {
  this._plants.push(plant);
}



  public watering (waterAmount:number) {
    console.log(`Watering with ${waterAmount}`);
    //when watering it should only water those what needs water with equally divided amount amongst them
    
    // if it does water the plant with some part of the water
    let waterablePlants: (Tree | Flower)[] = [];
    //goes throu each FLower OR tree in the garden
    //checks if the given tree/flower needs water -> pushes it to the watering array
    for (let i:number = 0; i <this._plants.length; i++){
      if (this._plants[i].checkWaterLevel() === 1) {
        waterablePlants.push(this._plants[i]);
      }else {
        return this._plants[i].checkWaterLevel;
      }
      
    }
    for (let i:number = 0; i <waterablePlants.length; i++) {
      waterablePlants[i].wateringPlant(waterAmount/waterablePlants.length);

      return waterablePlants[i].checkWaterLevel;
    }


    




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

  checkWaterLevel():number {
    if (this._waterLevel < 10) {
      return 1
      console.log(`The ${this._color} Tree needs water`);
    }else {
      return 0
      console.log(`The ${this._color} Tree doesnt need water`);
    }
  }

  wateringPlant(waterAmount:number):void {
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
  
  checkWaterLevel ():number {
    if (this._waterLevel < 5) {
      return 1;
      console.log(`The ${this._color} Flower needs water`);
    }else {
      return 0;
      console.log(`The ${this._color} Flower doesnt need water`);
    }
  }
  
  wateringPlant(waterAmount:number):void {
    this._waterLevel += waterAmount*0.75; 
  }

}

//Testing
/*
let pineTree = new Tree ('black');
let tulipFlower = new Flower('red');
console.log(pineTree, tulipFlower);

pineTree.checkWaterLevelOfTree();
tulipFlower.checkWaterLevelOfFlower();

pineTree.wateringTree(20);
tulipFlower.wateringFlower(20);

pineTree.checkWaterLevelOfTree();
tulipFlower.checkWaterLevelOfFlower();
*/


let garden = new Garden ('BeautifulGarden');
let pineTree = new Tree ('black');
let tulipFlower = new Flower('red');

garden.addPlant(pineTree);
garden.addPlant(tulipFlower);

console.log(garden.watering(20));