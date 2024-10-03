function tarkista()
{
let etunimi = document.getElementById("etunimi").value;
let sukunimi = document.getElementById("sukunimi").value;
let osoite = document.getElementById("osoite").value;
let postinumero = document.getElementById ("postinumero").value;
let paikkakunta = document.getElementById ("paikkakunta").value;
let puhelinnumero = document.getElementById ("puhelinnumero").value;

if
    (etunimi.trim() == "")
{
    alert("Anna etunimi");
}
else if    
    (sukunimi.trim() == "")
    {
    alert("Anna sukunimi");
    }
else if (osoite.trim() == "")
    {
    alert ("Anna osoite");      
    }
else if (postinumero.trim() == "")
    {
    alert ("Anna postinumero");    
    }
else if (paikkakunta.trim() == "")
    {
    alert ("Anna paikkakunta");
    }
else if (puhelinnumero.trim() == "")
    {
    alert ("Anna puhelinnumero");
}
else 
    { 
    alert ("Kiitos tiedoista");
}
}
event.preventDefault();