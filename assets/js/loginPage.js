

function formValidation () {
    let containerDiv = document.querySelector('.login-main');
    let inputForm = containerDiv.querySelector('.inputGroup ');
    let inputEmail = inputForm.querySelector('#email');
    let inputPass = inputForm.querySelector('#password');
    inputEmail.addEventListener('click', () =>{
        alert('he')
    })

    console.log(inputPass);
  
  }
  formValidation('.loginSection');
  