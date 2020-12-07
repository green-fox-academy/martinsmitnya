// GARDEN, Flowers (color) watering funcion, Tree (color) clases
/*
The Garden
is able to hold unlimited amount of flowers or trees
when watering it should only water those what needs water with equally divided amount amongst them
eg. watering with 40 and 4 of them need water then each gets watered with 10
*/

class Garden {
  protected _plants: (Flower | Tree)[];
  protected _name: string;

  constructor(name: string) {
    this._name = name ?? 'myDefaultGardenName'
    this._plants = [];
  }

  public addPlant(plant: (Flower | Tree)) {
    this._plants.push(plant);
  }

  //Shows garden without modifications
  public checkGarden(): void {
    for (let i: number = 0; i < this._plants.length; i++) {
      if (this._plants[i].checkWaterLevel() === 1) {
        console.log(`The ${this._plants[i].getName()} needs water`);
      } else {
        console.log(`The ${this._plants[i].getName()} doesnt need water`);
      }
    }
  }

  //Waters the garden with wet amount, distributing evenly among plants that need water
  public watering(waterAmount: number): void {
    console.log(`Watering with ${waterAmount}`);
    let waterablePlants: (Tree | Flower)[] = [];
    //Cehck each plant, if it needs water -> if yes pushes it to the watering array
    for (let i: number = 0; i < this._plants.length; i++) {
      if (this._plants[i].checkWaterLevel() === 1) {
        waterablePlants.push(this._plants[i]);
      } else {
        console.log(`The ${this._plants[i].getName()} doesnt need water`);
      }

    }
    //WATERING ARRAY At the watering section it waters the plants that are pushed here
    for (let i: number = 0; i < waterablePlants.length; i++) {
      waterablePlants[i].wateringPlant(waterAmount / waterablePlants.length);
      if (this._plants[i].checkWaterLevel() === 0) {
        console.log(`The ${this._plants[i].getName()} doesnt need water`);
      } else {
        console.log(`The ${this._plants[i].getName()} needs water`);
      }
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
  protected _color: string;
  protected _waterLevel: number;

  constructor(color: string) {
    this._color = color;
    this._waterLevel = 0;
  }
  public getName() {
    return `${this._color} Tree`
  }

  public checkWaterLevel(): number {
    if (this._waterLevel < 10) {
      return 1
    } else {
      return 0

    }
  }

  public wateringPlant(waterAmount: number): void {
    this._waterLevel += waterAmount * 0.4;
  }
}





/*
The Flower
needs water if its current water amount is less then 5
when watering it the flower can only absorb the 75% of the water
eg. watering with 10 the flower's amount of water should only increase with 7.5
*/


class Flower {
  protected _color: string;
  protected _waterLevel: number;

  constructor(color: string) {
    this._color = color;
    this._waterLevel = 0;
  }
  public getName() {
    return `${this._color} Flower`
  }

  public checkWaterLevel(): number {
    if (this._waterLevel < 5) {
      return 1;
    } else {
      return 0;
    }
  }

  public wateringPlant(waterAmount: number): void {
    this._waterLevel += waterAmount * 0.75;
  }

}

//Testing

let garden = new Garden('BeautifulGarden');

garden.addPlant(new Flower('yellow'));
garden.addPlant(new Flower('blue'));
garden.addPlant(new Tree('purple'));
garden.addPlant(new Tree('orange'));

garden.checkGarden();
garden.watering(40);
garden.watering(70);