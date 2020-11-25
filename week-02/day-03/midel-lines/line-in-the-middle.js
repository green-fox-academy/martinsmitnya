'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

//CODE FROM HERE  width="600" height="400"




// draw a red horizontal line to the canvas' middle.

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(250, 200);
ctx.lineTo(350, 200);
ctx.stroke();


// draw a green vertical line to the canvas' middle.

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(300, 150);
ctx.lineTo(300, 250);
ctx.stroke();