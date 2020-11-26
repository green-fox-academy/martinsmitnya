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




//Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

function drawAll (array) {
  //FIRST SET BEGINNG POINT HERE
  let fromX = array[0] [0];
  let fromY = array[0] [1];
  console.log ('Begginer X: ' + fromX + 'Y: ' + fromY);
  
  for (let k=0; k < array.length; k++) {     //Go to the Nested Array
    let arrayToConvert = array[k];
    // I reset toX, toY.
    let toX =0;
    let toY =0;
    for (let i = 0; i < arrayToConvert.length; i++) {     //Take each number one by one from the inner array.
      if (i ===0) {
        toX = arrayToConvert[i];
      } else {
        toY = arrayToConvert[i];
      }
    }//I have toX and toY HERE 
    console.log('toX: '+  toX + ' toY: '+ toY)
    drawLine (fromX, fromY, toX, toY);
    //I set the NEW fromX and fromY
    fromX = toX;
    fromY = toY;

    console.log('AFTER SETTING fromX: ' + fromX + ' fromY: ' + fromY);
  } //Afther it finished drawing 4 leines it should draw teh last one to the beginer point drawLine (fromX, fromY, toX, toY);;
}

drawAll([[10, 10], [290,  10], [290, 290], [10, 290]]);









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
*/


/*SAVE I just have to make a for loop go +1

function drawAll (array) {
  //FIRST SET BEGINNG POINT HERE
  let fromX = array[0] [0];
  let fromY = array[0] [1];
  console.log ('Begginer X: ' + fromX + 'Y: ' + fromY );
  array.forEach(function (arrayToConvert) {     //Go to the Nested Array

    // I reset toX, toY.
    let toX =0;
    let toY =0;
    for (let i = 0; i < arrayToConvert.length; i++) {     //Take each number one by one from the inner array.
      if (i ===0) {
        toX = arrayToConvert[i];
      } else {
        toY = arrayToConvert[i];
      }
    }//I have toX and toY HERE 
    console.log('toX: '+  toX + ' toY: '+ toY)
    drawLine (fromX, fromY, toX, toY);
    //I set the NEW fromX and fromY
    fromX = toX;
    fromY = toY;

    console.log('AFTER SETTING fromX: ' + fromX + ' fromY: ' + fromY);
  } );
}

drawAll([[10, 10], [290,  10], [290, 290], [10, 290]]);


SAVE */