let projectorImage = document.querySelector('.projectorImage');
let sideButton = document.querySelectorAll('button');
let sliderlItems = document.querySelectorAll ('.sliderListItem');
let sliderlItemImg = document.querySelectorAll ('.sliderListItemImg');
let currentImg = sliderlItems[0];

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
      if (currentImg == sliderlItems[0]) {
        console.log('FIRST TIEM HERE 0');
      } else {console.log('Previous picture')}
      
    } 
    else {
      console.log('RIGHT 1')
      if (currentImg == sliderlItems[sliderlItems.length-1]) {
        console.log('LAST ITEM HERE 8');
      } else {console.log('Next picture')}
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
    currentImg = sliderlItems[i];
    projectorImage.setAttribute('src', clickedImg);
  }
}