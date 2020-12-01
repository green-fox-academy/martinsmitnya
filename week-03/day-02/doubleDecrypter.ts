import { tmpdir, totalmem } from "os";

const fs = require('fs');


function decrypter (from:string) {
  let bufferContent:string = '';
  let temporaryContent:string = '';
  try{
    bufferContent = fs.readFileSync(from, 'utf-8').toString();    //WE parse all content to a string
  }catch(e) {console.log('False, reading error');}
  //Loop goes trhou each letter
  for (let i:number = 0; i<bufferContent.length; i++){
    if (bufferContent[i] !== bufferContent[i-1]) {
      temporaryContent +=bufferContent[i];
    }
  }

  try{
    fs.writeFileSync(from, temporaryContent);
  }catch(e) {console.log('False, writing error');}

}

decrypter ('multpleLine.txt');

