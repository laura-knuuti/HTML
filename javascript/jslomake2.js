function etsiluku() {
    let luku1, luku2, luku3, luku4, luku5, suurin;
            luku1  = parseInt(document.getElementById('eka').value);
            luku2 = parseInt(document.getElementById('toka').value);
            luku3 = parseInt(document.getElementById('kolmas').value);
            luku4  = parseInt(document.getElementById('neljas').value);
            luku5 = parseInt(document.getElementById('viides').value);
    if (luku1 > luku2 && luku3 < luku4 && luku4 < luku2 && luku5 < luku2)
    {
        suurin = luku2
    }
else if (luku1 < luku3 && luku4 < luku3 && luku5 < luku3)
{
    suurin = luku3
}
else if (luku1 < luku4 && luku5 < luku4)
{
    suurin = luku4;
}
else if (luku1 < luku5)
{
    suurin = luku5;
}
{
else
    suurin = luku1
}
            document.write("Annoit luvut " + luku1 + ' ' + luku2 + ' ' + luku3 + ' ' + luku4 + ' ' + luku5);
            document.write ("<br>Suurin niistä on: " + suurin);
}