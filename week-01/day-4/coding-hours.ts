'use strict';

// An average Green Fox attendee codes 6 hours daily
// The semester is 17 weeks long
//
// Print how many hours is spent with coding in a semester by an attendee,
// if the attendee only codes on workdays.
//
// Print the percentage of the coding hours in the semester if the average
// work hours weekly is 52

let dailyCoding: number = 6;
let semesterWeeks: number = 17;
let semesterDays: number = semesterWeeks*5;
let totalCodingHours: number = semesterDays * dailyCoding; //510
let weeklyWorkHourTotal: number = 52 * semesterWeeks; //887

let codingPercentige: number = (totalCodingHours / weeklyWorkHourTotal) * 100; 

console.log ('Hours spent coding: ' + semesterDays * dailyCoding + ' hours in total');
console.log ('The percentiga of coding hours at 52 weekly hours is: ' + codingPercentige + '%')

