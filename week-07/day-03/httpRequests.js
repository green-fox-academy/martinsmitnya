
let xhr = new XMLHttpRequest();

let method = 'GET'
let endPoint = 'https://swapi.dev/api/starships/9/'//'https://reqres.in/api/users?page=2';

xhr.open(method, endPoint);

xhr.onload = () => {
  let data = JSON.parse(xhr.response);
  let dataKeys = Object.keys(data)

  let parentlist = document.querySelector('#list');

  for (let i = 0; i < dataKeys.length; i++) {
    let myItem = document.createElement('li');
    myItem.innerHTML = data[dataKeys[i]];
    parentlist.appendChild(myItem);
  }
}
//THE SAME AS: 
// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4) {
//     document.querySelector('body').innerHTML = xhr.response;
//   }
// }

xhr.send();