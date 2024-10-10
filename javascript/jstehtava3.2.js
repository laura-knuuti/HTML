function öökkönen()
{
    var kirjain = document.getElementById('salasana').value;
    var muuta = "<p>";
    for (let i = 0; i < kirjain.length; i++);
    {
    salasana += salasana[i] + 'Ö-';
    }
    muuta +="<p>";
    document.getElementById('muuta').innerHTML = muuta;
}