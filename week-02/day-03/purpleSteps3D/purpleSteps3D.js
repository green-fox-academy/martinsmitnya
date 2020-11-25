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

for (let i = 1; i < 20; i++){
  let size= 5;
  let relativeSize = i*size;                   //Square Size
  // Sapce between squares
  let sapce = 0;
  for (let j =0; j < i; j++)
  {
    sapce += j*size;
  }
  //draw with differenc color
  let color = `rgb(${i*50}, ${i*10}, ${i*30})`

  drawFillRect(sapce, relativeSize, color);
}