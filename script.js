
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const email = document.getElementById('email');
const usernameAlert = document.getElementById('usernameAlert');
const emailAlert = document.getElementById('emailAlert');
const passwordAlert = document.getElementById('passwordAlert');
const confirmPasswordAlert = document.getElementById('confirmPasswordAlert');
const submitBtn = document.getElementById('submitBtn');
const form = document.querySelector('.form-register');
const successAlert = document.querySelector('.success-alert');
let validity = false;

function hasNumber(inputString) {
  const regex = /\d/;
  return regex.test(inputString);
}

const validateUsername = ()=>{
  let validity = false;

  if(username.value==="") usernameAlert.textContent = "username can't be empty";
  
  else if(hasNumber(username.value)) usernameAlert.textContent = "enter valid username";

  else if(username.value.length<5) usernameAlert.textContent = "username needs to be of min 5 characters";
  else  {
    usernameAlert.textContent = "";
  validity = true;
}

return validity;
}

const validateEmail = ()=>{

  let validity = false;

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if(email.value==="") emailAlert.textContent = "email can't be empty";

  else if(!emailRegex.test(email.value)) emailAlert.textContent = "invalid email";
  
   else 
   {
    emailAlert.textContent = "";
    validity = true;
  }
return validity;
}


const validatePassword = ()=>{
  
  validity = false;
  const minLength = 8;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const digitRegex = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;

  const hasMinLength = password.value.length >= minLength;
  const hasUppercase = uppercaseRegex.test(password.value);
  const hasLowercase = lowercaseRegex.test(password.value);
  const hasDigit = digitRegex.test(password.value);
  const hasSpecialChar = specialCharRegex.test(password.value);
  

  if(password.value==="") passwordAlert.textContent = "password can't be empty";

  else  if(!hasMinLength) passwordAlert.textContent = "minimum 8 characters required";
  else if (!hasUppercase) passwordAlert.textContent = "password needs to have atleast one uppercase character";
  else if (!hasLowercase) passwordAlert.textContent = "password needs to have atleast one lowercase character";
  else if (!hasDigit) passwordAlert.textContent = "password needs to have atleast one digit";
  else if(!hasSpecialChar) passwordAlert.textContent = "password needs to have atleast one special character";
  else 
 { 
  passwordAlert.textContent = "";
  validity = true;
}
return validity;
}


const validateConfirmPassword = ()=>{

  let validity = false;

  if(confirmPassword.value==="") confirmPasswordAlert.textContent = "field can't be empty";
  else if(confirmPassword.value!=password.value) confirmPasswordAlert.textContent = "password do not match";
  else 
  {
    confirmPasswordAlert.textContent = "";
    validity = true;
  }
  return validity;
}


username.addEventListener('input',(e)=>{
 
   
    setTimeout(() => {
      validateUsername();
    }, 2000);
   
  
})

password.addEventListener('input',(e)=>{
  
  
  setTimeout(() => {
    validatePassword();
  }, 2000);
 
})


confirmPassword.addEventListener('input',(e)=>{
 
 setTimeout(() => {
  validateConfirmPassword();
}, 2000);
  
})


email.addEventListener('input',(e)=>{
 setTimeout(() => {
  validateEmail();
}, 3000);
  
})


submitBtn.addEventListener('click',(e)=>{
e.preventDefault();

 validateUsername();
 validatePassword();
   validateEmail();
  validateConfirmPassword();

if(!validateUsername() || !validatePassword() || !validateEmail() || !validateConfirmPassword())
{
  return;
}
else 
{
  
  successAlert.style.display = 'block';
    setTimeout(() => {
        successAlert.style.display = 'none';
    }, 1000);
   
}
username.value="";
password.value="";
confirmPassword.value="";
email.value="";

})