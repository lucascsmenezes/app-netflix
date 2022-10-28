var checkValid = document.getElementById("check-email");
var submit = document.getElementById("submit");
var checkSubmit = document.getElementById('check-submit');
var fieldEmail = document.getElementById("field_email");
var fieldEmailSecond = document.getElementById("field_email_second");
var checkSubmitSecond = document.getElementById('check-submit-second');
var checkValidSecond = document.getElementById("check-email-second");

const regex = /\S+@\S+\.\S+/;

function validField() {
  if(fieldEmail.value == ""){
    checkSubmit.style.display = "block";
    checkValid.style.display = "none";
    fieldEmail.style.borderTop = "0";
    fieldEmail.style.borderLeft = "0";
    fieldEmail.style.borderBottom = "2";
    fieldEmail.style.borderRight = "0";
    fieldEmail.style.borderColor = "#ffa00a";
  }else if(regex.test(fieldEmail.value)){
      checkSubmit.style.display = "none";
      checkValid.style.display = "none";
      fieldEmail.style.borderTop = "0";
      fieldEmail.style.borderLeft = "0";
      fieldEmail.style.borderBottom = "0";
      fieldEmail.style.borderRight = "0";
      fieldEmail.style.borderColor = "";
  }else{
    checkSubmit.style.display = "none";
    checkValid.style.display = "block";
    fieldEmail.style.borderTop = "0";
    fieldEmail.style.borderLeft = "0";
    fieldEmail.style.borderBottom = "2";
    fieldEmail.style.borderRight = "0";
    fieldEmail.style.borderColor = "#ffa00a";
  }
}

function validFieldSecond() {
  if(fieldEmailSecond.value == ""){
    checkSubmitSecond.style.display = "block";
    checkValidSecond.style.display = "none";
    fieldEmailSecond.style.borderTop = "0";
    fieldEmailSecond.style.borderLeft = "0";
    fieldEmailSecond.style.borderBottom = "2";
    fieldEmailSecond.style.borderRight = "0";
    fieldEmailSecond.style.borderColor = "#ffa00a";
  }else if(regex.test(fieldEmailSecond.value)){
      checkSubmitSecond.style.display = "none";
      checkValidSecond.style.display = "none";
      fieldEmailSecond.style.borderTop = "0";
      fieldEmailSecond.style.borderLeft = "0";
      fieldEmailSecond.style.borderBottom = "0";
      fieldEmailSecond.style.borderRight = "0";
      fieldEmailSecond.style.borderColor = "none";
  }else{
    checkSubmitSecond.style.display = "none";
    checkValidSecond.style.display = "block";
    fieldEmailSecond.style.borderTop = "0";
    fieldEmailSecond.style.borderLeft = "0";
    fieldEmailSecond.style.borderBottom = "2";
    fieldEmailSecond.style.borderRight = "0";
    fieldEmailSecond.style.borderColor = "#ffa00a";
  }
}

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

