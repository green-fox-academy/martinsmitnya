'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

//CODE FROM HERE


// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]



//Create drawing function
function drawFillRect (space, size, colour){
  ctx.fillStyle = colour;
  ctx.fillRect(space, space, size, size);
}

// forloop for the stairs
// THE only thing mission is THE SPACE between the Squares, wich is equal to: 
//0*50.. (i-1)*50.. (i-1)*50 + (i-2)*50.. (i-1)*50 + (i-2)*50 + (i-3)*50...(i-1)*50 + (i-2)*50 + (i-3)*50 + (i-4)*50

for (let i = 1; i < 5; i++){
  // A RECURSION FUCNTION IS NEEDED THAT does x-1 -1 -1 ...
  let spaceFromPrevious =  + (i-1*50)   -50;      //SPACE BETWEEN SQUARES
  


  let size = i*50;                   //Square Size
  //draw with differenc color
  let color = `rgb(${i*50}, ${i*30}, ${i*70})`
  drawFillRect(spaceFromPrevious, size, color);
}