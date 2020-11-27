'use strict';

const canvas = document.querySelector('.main-canvas');
const ctx = canvas.getContext('2d');

//CODE FROM HERE

//Draw standard line
function drawLine(fromX, fromY, toX, toY) {
  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.moveTo(fromX, fromY);
  ctx.lineTo(toX, toY);
  ctx.stroke();
}

function rightNet (spaceBetweenLines, marginLeft) {
  for (let i =1; i<=(400-marginLeft)/spaceBetweenLines; i++) {
    drawLine((i*spaceBetweenLines)+ marginLeft, 0, 400, i*spaceBetweenLines);
  }

}

function leftNet (spaceBetweenLines, marginTop) {
  for (let i =1; i<=(400-marginTop)/spaceBetweenLines; i++) {
    drawLine(0, (i*spaceBetweenLines) + marginTop, (i*spaceBetweenLines), 400);
  }

}

leftNet(20, 50);
rightNet (20, 50);