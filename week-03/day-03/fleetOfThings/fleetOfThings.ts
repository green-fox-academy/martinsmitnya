import { Thing } from './thing';
import { Fleet } from './fleet';

let fleet = new Fleet();

// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Download those, use those
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

function writeTheList(item:string, done:boolean) {
  if (done = true) {
    fleet.add(new Thing(item));
  }else {
    fleet.add(new Thing(item));
  }
}

let milk: Thing= new Thing('Get milk');
let obstacles:Thing = new Thing('Remove the obstacles');
let stand:Thing = new Thing('Stand up');
let lunch:Thing = new Thing('Eat lunch');

stand.complete();
lunch.complete();

fleet.add(milk);
fleet.add(obstacles);
fleet.add(stand);
fleet.add(lunch);


console.log(fleet.toString());