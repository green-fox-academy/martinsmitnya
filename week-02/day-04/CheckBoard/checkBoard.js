'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

//CODE FROM HERE
//DrawSquare function
function drawSquare (fromX, fromY) {
  ctx.fillRect(fromX, fromY, 50, 50);
}

//DrawOneRow
function drawRow (row, squares, start) {
  for (let i =0; i<squares; i++){
    if (start === 'white'){
      drawSquare (i*100 + 50, row*50);
    } else {
      drawSquare (i*100, row*50);
    }
  }

}

//Multiple rows
function drawCheckBoard (rowTotal, squaresTotal) {
  for (let i = 0; i < rowTotal; i++){
    if (i%2 ===0){
      drawRow (i, squaresTotal, 'white');
    } else {
      drawRow (i, squaresTotal, 'black');
    }
  }

}

drawCheckBoard(8, 6);