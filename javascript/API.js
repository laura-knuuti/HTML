function randomUser() {
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
      console.log(data.results[0]);

    document.getElementById("vastaus").innerHTML = "<img src=\'" + data.results[0].picture.large + "\'>";
    document.getElementById("nimi").innerHTML = "<b>Nimi:</b><br />" + data.results[0].name.first + " " + data.results[0].name.last;
    document.getElementById("sijainti1").innerHTML = "<b>Katuosoite:</b><br />" + data.results[0].location.street.name + " "
     + data.results[0].location.street.number + "</br>" + data.results[0].location.postcode + " " + data.results[0].location.city;
    document.getElementById("sijainti2").innerHTML = "<b>Kaupunki ja osavaltio:</b><br />" + data.results[0].location.city + " " + data.results[0].location.state;
    document.getElementById("maa").innerHTML = "<b>Maa:</b><br/>" + data.results[0].location.country;
    document.getElementById("bdate").innerHTML = "<b>Syntymäaika</b><br />" + data.results[0].dob.date;
    document.getElementById("puhelin").innerHTML = "<b>Puhelinnumero:</b><br />" + data.results[0].phone;
    document.getElementById("userpw").innerHTML = "<b>Käyttäjänimi + salasana:</b><br />" + data.results[0].login.username + " " + data.results[0].login.password;
    document.getElementById("email").innerHTML = "<b>Email:</b><br />" + data.results[0].email
    } );
  }



