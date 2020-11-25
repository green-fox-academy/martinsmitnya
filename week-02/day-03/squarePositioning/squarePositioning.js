'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

//CODE FROM HERE



// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.

function drawStrokeSquare (fromX, fromY) {
  ctx.strokeRect(fromX, fromY, 50, 50);
}


// Draw 3 squares with that function.
for (let i = 1; i < 4; i++) {
  drawStrokeSquare(i*60, i*60);
}


// Avoid code duplication.