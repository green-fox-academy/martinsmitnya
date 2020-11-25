'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

//CODE FROM HERE




// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.


function drawLine(fromX, fromY) {
  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(300, 200);
  ctx.stroke();
}


for (let i =1; i<=3; i++) {
  drawLine(i*50, i*120);
}