'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

//CODE FROM HERE



// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.

function rainbowSquare (size, colour) {
  ctx.fillStyle = colour;
  ctx.fillRect (300 -(size/2), 200 -(size/2), size, size);
}
// Create a loop that fills the canvas with a rainbow of colored squares.

let i = 1;
while (i < 600) {
  rainbowSquare (i, `rgb(${i*0.25}, ${i*0.25}, ${i*0.25})`);
  i++
}