'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

//with replace function
quote.replace('it', 'it always takes longer than');


//with substringmethod
quote = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;


//search for the part where I want and break the string
let begining: string = quote.substring(0, quote.indexOf('It')+2); 
// and the end of the old string
let ending: string = quote.substring(quote.indexOf('you'), quote.length-1); 
//add the new string 
let insert: string = ' always takes longer than '

quote = begining + insert + ending;


console.log(quote);

