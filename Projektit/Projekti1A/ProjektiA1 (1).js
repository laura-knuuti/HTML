//currently checks if the information fields are empty, any changes possible...
function check()
{
  var etunimi = document.getElementById('fname').value;
  var sukunimi = document.getElementById('lname').value;
  var email = document.getElementById('email').value;
  var salasana = document.getElementById('password').value;
  if (etunimi == "" || sukunimi == "" || salasana == "")
    {
      alert ("You didn't give all the all the information. Please check.");
      }
    //else
  //{
    //  document.getElementById('p1').innerHTML = "Message sent."
  //}
  var email = /\S+@\S+/;
  if (!email.test(mail))
    {
    alert ("Give valid email address")
    return false;
  }
}
  {
    alert ("You didn't give all the all the information. Please check.");
    }

  //checks password
  password.preventDefault(); {
  if (password.length < 12) {
    return false;
  }

  if (!/[a-z]/.test(password)) {
    return false;
  }

  if (!/[A-Z]/.test(password))
  {
    return false;
  }
  if (!/[0-9]/.test(password)) {
    return false;
  }
  return true;
}
  if  (password == false);
  {
    alert ("Your password didn't meet all the conditions. Please check.")
  }
//checks checkboxes
preventDefault();
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


//function to call functions
  //function callEverything() {
//check();
//checkboxVal();
//pwCheck();
//}

