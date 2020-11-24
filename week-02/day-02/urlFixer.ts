'use strict';
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crucial component, find out what it is and insert it too!

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

url= url.replace('bots', 'odds');     //with replacees


//with .replace built in function
url= url.replace('https', 'https:');   


console.log(url);


url = 'https//www.reddit.com/r/nevertellmethebots';

url= url.replace('bots', 'odds');     //with replacees

//With my own fucntion wich return a new string
function replacing (text: string): string {
  let textArr: string[] = text.split('');      //Split text into array 
  textArr[textArr.indexOf('/')-1] += ':';     //and see indeOf(char) where we want to and replace with ':'

  let newText:string = '';                              // create newstring
  for (let i:number = 0; i < textArr.length; i++) {    // one by one until array.length
    newText = newText + textArr[i];                   //give it all array[values]
    
  }
  return newText;                   //return new, modified array
}
console.log(replacing(url));







