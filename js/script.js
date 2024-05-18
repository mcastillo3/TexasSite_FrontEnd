// script to clear the search box with an x icon
const clearIcon = document.querySelector(".clear-icon");
const searchBar = document.querySelector(".search");

searchBar.addEventListener("keyup", () => {
  if(searchBar.value && clearIcon.style.visibility != "visible"){
    clearIcon.style.visibility = "visible";
  } else if(!searchBar.value) {
    clearIcon.style.visibility = "hidden";
  }
});

clearIcon.addEventListener("click", () => {
  searchBar.value = "";
  clearIcon.style.visibility = "hidden";
})

function validateEmail(emailField) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  if (reg.test(emailField.value) == false) {
    alert('Invalid Email Address');
    return false;
  }

  return true;
}

function compareEmails() {
  var email1 = document.getElementById('email1');
  var email2 = document.getElementById('email2');

  if (email1.value !== email2.value) {
    alert('Email addresses do not match');
    return false;
  }

  return true;
}

document.getElementById('email2').addEventListener('blur', compareEmails);