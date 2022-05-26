/*
const btn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
})

var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);
*/
document.querySelector('.btn').onclick = function (e) {
  var menu = document.querySelector('.menu');
  var btn = document.querySelector('.btn');

  menu.classList.toggle('is-active');
  btn.classList.toggle('is-active');
  e.preventDefault();
}

// CONTACT FORM FUNCTIONALITY 
var fields = {};

function isPhone(phone) {
  let regex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
  return regex.test(phone);
}

function isNotEmpty(value) {
  if (value == null || typeof value == 'undefined' ) return false;
  return (value.length > 0);
}

function fieldValidation(field, validationFunction) {
  if (!field) return false;
  let isFieldValid = validationFunction(field.value);
  if (!isFieldValid) {
    field.className = 'border-2 border-red-400';
  } else {
    field.className = '';
  }
 
  return isFieldValid;
}

function isValid() {
  var valid = true;
  valid &= fieldValidation(fields.subject, isNotEmpty);
  valid &= fieldValidation(fields.text, isNotEmpty);
 
  return valid;
}

function sendMessage() {
  fields.subject = document.getElementById('subjectField');
  fields.text = document.getElementById('messageArea');

  if (isValid()) {
    window.open(`mailto:info@frankies.ch?subject=${fields.subject.value}&body=${fields.text.value}`);
  } else {
    alert('Bitte prüfe deine Formulareingabe');
  }
}
