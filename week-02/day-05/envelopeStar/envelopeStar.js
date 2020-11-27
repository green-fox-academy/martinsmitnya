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

//From 0--- To III200
function botomLeftNet (spaceBetweenLines) {
  for (let i =1; i<=200/spaceBetweenLines; i++) {
    drawLine(i*spaceBetweenLines, 200, 200,  i*spaceBetweenLines +200);
  }

}
//From   ---400      200III
function botomRightNet (spaceBetweenLines) {
  for (let i =1; i<=200/spaceBetweenLines; i++) {
    drawLine(400-i*spaceBetweenLines, 200, 200, i*spaceBetweenLines +200);
  }

}
//From 0---   To III200
function topLeftNet (spaceBetweenLines) {
  for (let i =1; i<=200/spaceBetweenLines; i++) {
    drawLine(i*spaceBetweenLines, 200, 200, 200- i*spaceBetweenLines);
  }

}
//From   ---400    To III200
function topRightNet (spaceBetweenLines) {
  for (let i =1; i<=200/spaceBetweenLines; i++) {
    drawLine(400-i*spaceBetweenLines, 200, 200, 200- i*spaceBetweenLines);
  }

}


function drawStar (spaceBetweenLines) {
  botomLeftNet (spaceBetweenLines);
  botomRightNet (spaceBetweenLines);
  topLeftNet(spaceBetweenLines);
  topRightNet (spaceBetweenLines);
}

drawStar(20);