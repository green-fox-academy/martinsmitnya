'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

//CODE FROM HERE




// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function drawLine(fromX, fromY) {
  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(300, 200);
  ctx.stroke();
}



function drawAllLines () {
  for (let i = 0; i<=30; i++) {
      drawLine(i*20, 0);
      drawLine(i*20, 400);
      if (i<=20) {
        drawLine(0, i*20);
        drawLine(600, i*20);
      }
  }
}

drawAllLines();

/*
//Left/Right
for (let i = 0; i<=20; i++) {
  drawLine(0, i*20);
  drawLine(600, i*20);
}
//Top/Bottom
for (let i = 0; i<=30; i++) {
  drawLine(i*20, 0);
  drawLine(i*20, 400);
}
*/


