let sideButton = document.querySelectorAll('button');
for (let i = 0; i < sideButton.length; i++) {
  sideButton[i].onmouseover = () => {
    sideButton[i].setAttribute ('class', 'photoViewerButtonActive')
    console.log('HELLO');
  }
  sideButton[i].onmouseout = () => {
    sideButton[i].setAttribute ('class', 'photoViewerButton')
    console.log('BYE');
  }
  //Onclick next image

}

let thumbnailItems = document.querySelectorAll ('.sliderListItem');
for (let i = 0; i < thumbnailItems.length; i++) {
  thumbnailItems[i].onmouseover = () => {
    thumbnailItems[i].setAttribute ('class', 'sliderListItemActive');
  }
  thumbnailItems[i].onmouseout = () => {
    thumbnailItems[i].setAttribute ('class', 'sliderListItem');
  }
  //onclick view clicked image
}