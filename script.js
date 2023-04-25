const btn = document.querySelector('#btn');
const mailInput = document.querySelector('#mail');
const mailSpan = document.querySelector('.mail-span');
 
const btn1 = document.querySelector('#btn1');
const mailInput1 = document.querySelector('#mail1');
const mailSpan1 = document.querySelector('.mail1-span');
 
btn.addEventListener('click', () => {
  if (mailInput.value.trim() === '' || !isValidEmail(mailInput.value)) {
    mailSpan.style.display = 'block';
    mailInput.style.display = 'block';   
    mailInput.style.borderColor = 'red';
    mailInput.style.outlineColor = 'red';
  } else {
    mailSpan.style.display = 'none';
    mailInput.style.display = 'none';
    mailInput.style.borderColor = '';
    mailInput.style.outlineColor = '';
  }
});
 
btn1.addEventListener('click', () => {
  if (mailInput1.value.trim() === '' || !isValidEmail(mailInput1.value)) {
    mailSpan1.style.display = 'block';
    mailInput1.style.borderColor = 'red';
    mailInput1.style.outlineColor = 'red';
  } else {
    mailSpan1.style.display = 'none';
    mailInput1.style.borderColor = '';
    mailInput1.style.outlineColor = '';
  }
});
 
mailInput.addEventListener('focus', () => {
  mailSpan.style.display = 'none';
  mailInput.style.borderColor = '';
  mailInput.style.outlineColor = '';
});
 
mailInput1.addEventListener('focus', () => {
  mailSpan1.style.display = 'none';
  mailInput1.style.borderColor = '';
  mailInput1.style.outlineColor = '';
});
 
function isValidEmail(email) {
  // This is a simple email validation function that matches most email patterns, but not all
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
