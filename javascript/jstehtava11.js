function outolintu()
{
    var luku;
    var lause = "";
    luku = parseInt(document.getElementById('num').value);
    for(var i = 1; i <= 10; i++)
    {
        lause += luku + "*" + i + "=" + luku*i + "<br />";
    }
    document.write(lause);
}
