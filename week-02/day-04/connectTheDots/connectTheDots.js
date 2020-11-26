'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

//CODE FROM HERE



// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.

function drawLine(fromX, fromY, toX, toY) {
  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.stroke();
}

/*
function arrayToCoordinates (arrayToConvert) {
  for (let i = 0; i < arrayToConvert.length; i++) {
  let toX =0;
  let toY =0;
  if (i ===0) {
    toX = arrayToConvert[i];
  } else {
     toY = arrayToConvert[i];
  }
  console.log(toX, toY);
}



//Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

*/

function drawAll (array) {
  //FIRST SET BEGINNG POINT HERE
  array.forEach(function (arrayToConvert) {     //Go to the Nested Array
    for (let i = 0; i < arrayToConvert.length; i++) {     //Take each number from the inner array.
      let toX =0;
      let toY =0;
      if (i ===0) {
        toX = arrayToConvert[i];
      } else {
         toY = arrayToConvert[i];
        }
        drawLine (200, 200, toX, toY);
      }
    
  } );
}

drawAll([[10, 10], [290,  10], [290, 290], [10, 290]]);




