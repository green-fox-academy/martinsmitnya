'use strict';
// While saving this quote, a disk error has occured. Please fix it.
// Add "always takes longer than" between the words "It" and "you"

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

quote.replace('it', 'it always takes longer than');

//with substring it gives teh 'it... part'
quote.substring(quote.indexOf('It'), quote.indexOf('It')+2); 


console.log(quote)

