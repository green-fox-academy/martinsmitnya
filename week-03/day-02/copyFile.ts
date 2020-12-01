  
// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
const fs = require('fs');


function copier (from:string, to:string) {
  //take the files of one
  let bufferContent:string = ''
  try{
    bufferContent = fs.readFileSync(from, 'utf-8').toString();
  }catch(e) {console.log('False, reading error');}

  try{
    fs.writeFileSync(to, bufferContent);
  }catch(e) {console.log('False, writing error');}

}

copier('multpleLine.txt', 'my-file.txt')
