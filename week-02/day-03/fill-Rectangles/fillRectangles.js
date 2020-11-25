'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

//CODE FROM HERE




// Draw four different size and color rectangles.
// Avoid code duplication.


function drawFillRect (fromX, fromY, widthX, lengthY, colour){
  ctx.fillStyle = colour;
  ctx.fillRect(fromX, fromY, widthX, lengthY);
}



for (let i = 1; i < 5; i++) {
  if (i === 1) {drawFillRect(i*110 -110, i*110 -110, i* 20, i* 20, 'red');} 
    else if (i===2) {drawFillRect(i*110 -110, i*110 -110, i* 20, i* 20, 'green');} 
    else if (i===3) {drawFillRect(i*110 -110, i*110 -110, i* 20, i* 20, 'blue');} 
    else if (i===4) {drawFillRect(i*110 -110, i*110 -110, i* 20, i* 20, 'orange');}
    else { drawFillRect(i*110 -110, i*110 -110, i* 20, i* 20, 'black'); }
}
