let projectorImage = document.querySelector('.projectorImage');
let sideButton = document.querySelectorAll('button');
let sliderlItems = document.querySelectorAll ('.sliderListItem');
let sliderlItemImg = document.querySelectorAll ('.sliderListItemImg');
//Initialization
currentImg = 0;

for (let i = 0; i < sideButton.length; i++) {
  sideButton[i].onmouseover = () => {
    sideButton[i].setAttribute ('class', 'photoViewerButtonActive')
  }
  sideButton[i].onmouseout = () => {
    sideButton[i].setAttribute ('class', 'photoViewerButton')
  }

  //Onclick next image
  sideButton[i].onclick = () => {
    if (i == 0) {
      console.log('LEFT 0');
      if (currentImg == 0) {
        let previous = sliderlItemImg[sliderlItemImg.length -1].getAttribute('src');
        projectorImage.setAttribute('src', previous);
        currentImg = sliderlItemImg.length -1;
      } else {
        let previous = sliderlItemImg[currentImg -1 ].getAttribute('src');
        projectorImage.setAttribute('src', previous);
        currentImg --;
      }
      
    } 
    else {
      console.log('RIGHT 1')
      if (currentImg == sliderlItemImg.length-1) {
        let next = sliderlItemImg[0].getAttribute('src');
        projectorImage.setAttribute('src', next);
        currentImg = 0;
      } else {
        let next = sliderlItemImg[currentImg +1].getAttribute('src');
        projectorImage.setAttribute('src', next);
        currentImg ++;
      }
    }
      
  }//Oclivk next img logic done

}


for (let i = 0; i < sliderlItems.length; i++) {
  sliderlItems[i].onmouseover = () => {
    sliderlItems[i].setAttribute ('class', 'sliderListItemActive');
  }
  sliderlItems[i].onmouseout = () => {
    sliderlItems[i].setAttribute ('class', 'sliderListItem');
  }
  //onclick view clicked image
  sliderlItems[i].onclick = () => {
    let clickedImg = sliderlItemImg[i].getAttribute('src');
    currentImg = i;
    projectorImage.setAttribute('src', clickedImg);
  }
}