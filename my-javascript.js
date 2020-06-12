//Function to change the colour of the navigation bar
window.onload = function changeColor (){
  var display = document.getElementById('navbar').style.backgroundColor = "green";
}

// Radio buttons
function checkRadio(umsex, ufsex){
var umsex = document.registration.msex;
var ufsex = document.registration.fsex;
 x = 0;
 if (umsex.checked) {
   x++;
 } if (ufsex.checked) {
   x++;
 }
 if (x==0) {
   alert('Select Gender');
   umsex.focus();
   return false;
 } else {
   alert('Form Successfully Submited');
   window.location.reload()
   return true;
 }
  }

 //Form validation
 function formValidation(){
   var name = document.getElementById("fName");

   if (name.value == "") {
     arlert("Please fill in the First Name field");
     return false;
   }
}

// Email Validation
function validateEmail(){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var inputText = document.getElementById("email").value;
  if(inputText.value.match(mailformat)){
  document.myForm.email.focus();
  return true;
  } else {
  alert("You have entered an invalid email address!");
  document.myForm.email.focus();
  return false;
}
}
