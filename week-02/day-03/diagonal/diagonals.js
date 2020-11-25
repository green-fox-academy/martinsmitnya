'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

//CODE FROM HERE 600-400




// Draw the canvas' diagonals.
function drawLine(fromX, fromY, toX, toY, colour) {
  ctx.beginPath();
  ctx.strokeStyle = colour;
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.stroke();
}

// If it starts from the upper-left corner it should be green, otherwise it should be red.
drawLine(0, 0, 600, 400, 'green');
drawLine(600, 0, 0, 400, 'red');
