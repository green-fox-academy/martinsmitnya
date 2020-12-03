/*
Create a Station and a Car classes

Station
gasAmount -> available gas amount of the gas station
refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount

Car
gasAmount -> gas amount of the car
capacity -> capacity of the fuel tank
create constructor for Car where:
initialize gasAmount -> 0
initialize capacity -> 100
*/

class Station {
  private _gasAmount: number;

  constructor(gasAmout:number){
    this._gasAmount = gasAmout;
  }

  refill(car:Car){
    this._gasAmount = this._gasAmount - (car.capacity - car.gasAmount);
    car.fillCar(car.capacity - car.gasAmount);
  }

  get gasAmount (){
    return this._gasAmount;
  }
}


class Car {
  private _gasAmount: number;
  private _capacity: number;

  constructor(gasAmout:number, capacity:number){
    this._gasAmount = gasAmout;
    this._capacity = capacity;
  }

  get capacity (){
    return this._capacity;
  }
  get gasAmount (){
    return this._gasAmount;
  }
  fillCar (fuelAmount:number){
    this._gasAmount += fuelAmount;
  }
  
}

let VolskWagen: Car = new Car(20, 100);
let Shell: Station = new Station(1000);

console.log('Parking the car to Station: ',  VolskWagen, Shell);

Shell.refill(VolskWagen);

console.log('Leaving from Station: ',  VolskWagen, Shell);