
let xhr = new XMLHttpRequest();

let method = 'GET'
let endPoint = 'https://reqres.in/api/unknown';

xhr.open(method, endPoint);
xhr.onload = () => {
  document.querySelector('body').innerHTML = xhr.response
}
xhr.send();