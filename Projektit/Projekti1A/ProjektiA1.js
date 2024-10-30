// function check()
// {
//   var etunimi = document.getElementById('fname').value;
//   var sukunimi = document.getElementById('lname').value;
//   var email = document.getElementById('email').value;
//   var salasana = document.getElementById('password').value;
//   var palaute = document.getElementById('textfield').value;
//   if (etunimi == "" || sukunimi == "" || email == "" || salasana == ""|| palaute > 20)
//   {
//     alert ("You didn't give all the information. Please check")
//   }
//    // else
//   //  {
//   //    alert ("Message sent.")
//    // }
//   }
function checkboxVal(event) {
  event.preventDefault();
  var chk = document.getElementsByName("device");
  let hasChecked = false;
  for (var i = 0; i < chk.length; i++) {
    if (chk[i].checked) {
      hasChecked = true;
    }
  }
  if (hasChecked == false) {
    alert("Check at least one device");
  }
}
