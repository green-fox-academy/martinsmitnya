const form = document.querySelector('form');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  const username = document.querySelector('#username');
  const email = document.querySelector('#email');
  const button = document.querySelector('button');
  const requestBody = JSON.stringify({'username': username.value, 'email': email.value});
  
  if(username.value || email.value) {
    //DO this if we have inputs
    xhr = new XMLHttpRequest;

    xhr.onreadystatechange = (event) => {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        let response = JSON.parse(xhr.response);
        responseAppend(response);
      }
    }

    xhr.open('POST', 'http://localhost:3000/signup');
    xhr.setRequestHeader('content-type', 'application/json');
    
    xhr.send(requestBody);

    form.reset();
  } else {
    alert('Fill all input fields!');
  }
});
