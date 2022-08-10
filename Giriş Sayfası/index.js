var emailinput = document.getElementById("email");
const password = document.getElementById("password");

function ValidateEmail() {
  var validRegex = /^[a-zA-Z0-9.!%&'*/?^_`{|}-üöçşı]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailinput.value.match(validRegex)) {
    emailinput.classList.remove("red")
    return true;
  } else {
    emailinput.classList.add("red")
    return false;
  }
}

function nonRed() {
  emailinput.classList.remove("red")
}

function enter(){
  if(emailinput.value=="a@hotmail.com" && password.value==123456){
    anasayfa();
  }

else{
  alert("Şifre veya Eposta Hatalı.")
}
}
function anasayfa(){
  window.location.href= "../Ana Sayfa/main.html"
}


