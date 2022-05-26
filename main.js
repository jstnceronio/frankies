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

document.addEventListener("DOMContentLoaded", function() {
  fields.name = document.getElementById('nameField');
  fields.phone = document.getElementById('phoneField');
  fields.text = document.getElementById('textArea');
});

function isEmail(email) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}

function isPhone(phone) {
  let regex = /^(\b(0041|0)|\B\+41)(\s?\(0\))?(\s)?[1-9]{2}(\s)?[0-9]{3}(\s)?[0-9]{2}(\s)?[0-9]{2}\b$/;
  return regex.test(String(email).toLowerCase());
}

function isNotEmpty(value) {
  if (value == null || typeof value == 'undefined' ) return false;
  return (value.length > 0);
}

function fieldValidation(field, validationFunction) {
  if (field == null) return false;
 
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
  valid &= fieldValidation(fields.name.value, isNotEmpty);
  valid &= fieldValidation(fields.phone.value, isPhone);
  valid &= fieldValidation(fields.text.value, isNotEmpty);
 
  return valid;
}

class Message {
  constructor(name, phone, text) {
    this.name = name;
    this.phone = phone;
    this.text = text;
  }
}

function sendMessage() {
  if (isValid()) {
    let msg = new Message(name.value, phone.value, text.value);
    alert(`Danke für deine Nachricht, ${msg.name}`)
  } else {
    alert('Es gab einen Fehler');
  }
}
