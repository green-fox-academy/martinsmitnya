const form = document.querySelector('form');
const loveCatsButton = document.querySelector('#loveCatsButton');
const singUpButton = document.querySelector('#singUpButton');

const dog = document.querySelector('#dog');
const cat = document.querySelector('#cat');
const victor = document.querySelector('#victor');
const yesBtn = document.querySelector('#yes');
const noBtn = document.querySelector('#no');

form.addEventListener('click', (event) => {
  if (cat.checked || dog.checked) {
    singUpButton.disabled = false;
  } else {
    singUpButton.disabled = true;
  }

  if (yesBtn.checked) {
    loveCatsButton.disabled = false;
  } else {
    loveCatsButton.disabled = true;
  }

  if (noBtn.checked && victor.checked) {
    loveCatsButton.disabled = true;
    singUpButton.disabled = false;
  }
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (noBtn.checked && victor.checked) {
    alert(`Sigh, we still added you to the cat facts list`);
  } else {
    alert(`Thank you, you've successfully signed up for cat facts`);
  }
});
