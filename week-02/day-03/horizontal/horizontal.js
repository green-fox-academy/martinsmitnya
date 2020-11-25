'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

//CODE FROM HERE



// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.

function drawLine(fromX, fromY) {
  ctx.beginPath();
  ctx.strokeStyle = 'blue';
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(fromX +50, fromY);
  ctx.stroke();
}



// Draw at least 3 lines with that function using a loop.
for (let i = 0; i < 3; i++) {
  drawLine((i+100)*1, (i+1)*100)
}

