function ilmoita()
{
var luku = parseInt(document.getElementById("ika").value);
if
(luku < 16)
{
    document.write("Voit ajaa polkupyörää"); 
 }
 else if
(luku < 18)
{
    document.write("Voit ajaa mopoa");
 }
 else {
    document.write("Voit ajaa autoa");   
 }
}