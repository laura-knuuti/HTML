function luvut()
{
var l1, l2, l3, l4, l5;
    l1 = parseInt(document.getElementById('eka').value);
    l2 = parseInt(document.getElementById('toka').value);
    l3 = parseInt(document.getElementById('kolmas').value);
    l4 = parseInt(document.getElementById('neljas').value);
    l5 = parseInt(document.getElementById('viides').value);
var summa = (l1 + l2 + l3 + l4 + l5);
var keskiarvo = (summa / 5);
{
document.write ("Annoit luvut: "+ l1 + " " + l2 + " " + l3 + " " + l4 + " " + l5 + "<br>"); }
{
document.write ("Lukujen summa on " + summa + "<br>"); }
{
document.write ("Lukujen keskiarvo on " + keskiarvo); }
}