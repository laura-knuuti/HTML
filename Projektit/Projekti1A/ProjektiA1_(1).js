//currently checks if the information fields are empty, any changes possible...
function check(event)
{
  event.preventDefault();
  var etunimi = document.getElementById('fname').value;
  var sukunimi = document.getElementById('lname').value;
  var email = document.getElementById('email').value;
  var salasana = document.getElementById('password').value;
  var mail = /\S+@\S+/;
  if (etunimi == "" || sukunimi == "" || salasana == "")
    {
      alert ("You didn't give all the all the information. Please check.");
    }
  else if (!mail.test(email))
    {
    alert ("Give valid email address");
  }


  //checks password
  if (salasana.length < 12) {
    alert("Salasanan pitää olla vähintään 12 merkkiä pitkä");
  }

  else if (!/[a-z]/.test(salasana)) {
    alert("Salasanassa tulee olla pieni kirjain");
  }

  else if (!/[A-Z]/.test(salasana))
  {
    alert("Salasanassa tulee olla iso kirjain");
  }
  else if (!/[0-9]/.test(salasana)) {
    alert("Salasanassa tulee olla numero");
  }
// checks checkboxes
event.preventDefault();
    var chk = document.getElementsByName("device");
    var hasChecked = false;
    for (var i = 0; i < chk.length; i++) 
      {
      if (chk[i].checked) {
        hasChecked = true;
      }
    }
    if (hasChecked == false) {
      alert("Check at least one device");
    }
//checks radioboxes
  var chkR = document.getElementsByName(leffa);
  var hasChk = false;
  for(var i = 0; i < chkR.length; i++)
  {
    if(chkR[i].checked) {
      hasChk = true;
    }
  }
      if (hasChk == false) {
        alert("Check at least one movie");
    }


// // //function to call functions
// //   //function callEverything() {
// // //check();
// // //checkboxVal();
// // //pwCheck();
// // //}

}