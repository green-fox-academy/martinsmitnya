'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

//CODE FROM HERE



// draw a box that has different colored lines on each edge.

function drawLine(fromX, fromY, toX, toY, colour) {
  ctx.beginPath();
  ctx.strokeStyle = colour;
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.stroke();
}

drawLine(10, 10, 110, 10, 'red');
drawLine(110, 10, 110, 110, 'blue');
drawLine(110, 110, 10, 110, 'orange');
drawLine(10, 110, 10, 10, 'green');

