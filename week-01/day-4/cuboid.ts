'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let a:number = 30;
let b:number = 4;
let c:number = 5;
console.log('Surface Area: ' + 2* (a*b + a*c + b*c));
console.log('Volume: '+ a * b * c);