
let xhr = new XMLHttpRequest();

let method = 'GET'
let endPoint = 'https://reqres.in/api/users?page=2';

xhr.open(method, endPoint);

xhr.onload = () => {
  document.querySelector('body').innerHTML = xhr.response;
}

//THE SAME AS: 
// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4) {
//     document.querySelector('body').innerHTML = xhr.response;
//   }
// }

xhr.send();