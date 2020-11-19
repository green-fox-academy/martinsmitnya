'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variable

let totalSeconds: number = 60*60*24;
let currentSecondsTotal: number = (currentHours*60*60) + (currentHours*60) + currentSeconds;

console.log(totalSeconds - currentSecondsTotal);
