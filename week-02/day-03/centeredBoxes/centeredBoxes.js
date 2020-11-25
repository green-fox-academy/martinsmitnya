'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

//CODE FROM HERE



// Create a function that draws one square and takes 1 parameters:
// The square size
// and draws a square of that size to the center of the canvas.

function drawOneSquare (size) {
  ctx.fillRect (300 -(size/2), 200 -(size/2), size, size);
}


// Draw 3 squares with that function.
for (let i = 1; i < 4; i++){
  drawOneSquare (i*20);
}



// Avoid code duplication.