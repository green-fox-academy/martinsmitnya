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

//DONE
function botomLeftNet (spaceBetweenLines) {
  for (let i =1; i<=200/spaceBetweenLines; i++) {
    drawLine(i*spaceBetweenLines, 200, 200, i*spaceBetweenLines +200);
  }

}
//DONE
function botomRightNet (spaceBetweenLines) {
  for (let i =1; i<=200/spaceBetweenLines; i++) {
    drawLine(400-i*spaceBetweenLines, 200, 200, i*spaceBetweenLines +200);
  }

}
//DONE
function topLeftNet (spaceBetweenLines) {
  for (let i =1; i<=200/spaceBetweenLines; i++) {
    drawLine(i*spaceBetweenLines, 200, 200, 200- i*spaceBetweenLines);
  }

}
//DONE
function topRightNet (spaceBetweenLines) {
  for (let i =1; i<=200/spaceBetweenLines; i++) {
    drawLine(400-i*spaceBetweenLines, 200,       200, 200- i*spaceBetweenLines);
  }

}

botomLeftNet (20);
botomRightNet (20);
topLeftNet(20);
topRightNet (20);
