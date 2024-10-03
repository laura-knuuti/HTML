function jarjesta() {
let osa1, osa2, osa3;

osa1  = parseInt(document.getElementById('eka').value);
osa2 = parseInt(document.getElementById('toka').value);
osa3 = parseInt(document.getElementById('kolmas').value);
document.write("Annoit luvut: " + osa1 + ' ' + osa1 + ' ' + osa3 + "<br>")
    if(osa1 < osa2 && osa1 < osa3)
    {
        if(osa2 < osa3)
        document.write("lukujen järjestys: " + osa1 + ' ' + osa2 + ' ' + osa3);
    else {
        document.write("lukujen järjestys: " + osa1 + ' ' + osa3 + ' ' + osa2);
    }
}
else if (osa2 < osa1 && osa2 < osa3)
{
    if(osa1 < osa3)
    {
        document.write("lukujen järjestys: " + osa2 + ' ' + osa3 + ' ' + osa1);
        
}
}
else if(osa3 < osa1 && osa3 < osa2)
  {
    if(osa1 < osa2)
    {
      document.write("Lukujen järjestys: " + osa3 + ' ' + osa1 + ' ' + osa2);
    }
    else {
      document.write("Lukujen järjestys: " + osa3 + ' ' + osa2 + ' ' + osa1);

    }
  }
}
