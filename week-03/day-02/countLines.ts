// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error

const fs = require('fs');



function countLines(filename:string):number {
  let lines: number = 0;
  let fileContents = fs.readFileSync(filename, 'utf-8').toString(); //Split the document into one strin in an array
  for (let i:number = 0; i < fileContents.length; i++) {       //go each element of the array[0] string
    if (fileContents[i] === '\n') {
      lines++
    }
  }
  
  return lines
}


console.log('THIS WORKS: ' + countLines('multpleLine.txt') );




/*
function countLines(filename:string):number {
  let lines: number = 0;
  let fileContents = fs.readFileSync(filename, 'utf-8').toString().split(); //Split the document into one strin in an array
  for (let i:number = 0; i < fileContents[0].length; i++) {       //go each element of the array[0] string
    if (fileContents [0][i] === '\n') {
      lines++
    }
  }
  
  return lines
}
*/