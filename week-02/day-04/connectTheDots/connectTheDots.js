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


function drawDots (array) {
  //FIRST SET THE EXPECTED END POINT AS STARTING POINT
  let fromX = array[array.length -1] [0];
  let fromY = array[array.length -1] [1];

  //DEBUG console.log ('Begginer X:' + fromX + ' Y:' + fromY);
  
  array.forEach(function (arrayToConvert){     //Go to the Nested Array
    //let arrayToConvert = array[k];
    // I reset toX, toY.
    let toX =0;
    let toY =0;
    for (let i = 0; i < arrayToConvert.length; i++)  {     //Take each number one by one from the inner array.
      if (i===0) {
        toX = arrayToConvert[0];
      } else {
        toY = arrayToConvert[1];
      }
    }//I have toX and toY HERE 

    //DEBUG console.log('toX: '+  toX + ' toY: '+ toY)

    drawLine (fromX, fromY, toX, toY);
    //I set the NEW fromX and fromY
    fromX = toX;
    fromY = toY;

    //DEBUG console.log('SETTING fromX: ' + fromX + ' fromY: ' + fromY);
    
  })
}

drawDots([[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]]);