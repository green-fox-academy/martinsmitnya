const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let username = document.querySelector('#username');
  let password = document.querySelector('#password');
  let myRequestBody = JSON.stringify({ 'username': username.value, 'password': password.value });
  if (username.value && password.value) {
    let xhr = new XMLHttpRequest;
    xhr.open('POST', 'loginForm/data');


    xhr.onreadystatechange = (event) => {
      if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        let response = JSON.parse(xhr.response);
        responseAppend(response);
      }
    }

    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(myRequestBody);

    form.reset();
    console.log(myRequestBody);

  }
});