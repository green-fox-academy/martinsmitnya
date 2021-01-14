let body = document.querySelector('body');
let xhr = new XMLHttpRequest();


let method = 'GET';
let endpoint = 'http://localhost:3000/bookTitle';

xhr.open('GET', endpoint);
xhr.onload = () => {
  // xhr.setRequestHeader('Content-Type', 'application/json');
  body.innerHTML = xhr.response;
}
xhr.send();