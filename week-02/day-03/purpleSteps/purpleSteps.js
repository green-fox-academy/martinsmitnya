'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

//CODE FROM HERE



// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]


//Create drawing function
function drawFillRect (fromX, fromY, colour){
  ctx.fillStyle = colour;
  ctx.fillRect(fromX, fromY, 20, 20);
}

// forloop for teh stairs
for (let i = 1; i < 20; i++){
  drawFillRect(i*20 -10, i*20 -10, 'purple');
}