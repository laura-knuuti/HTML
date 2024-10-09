function vuosi()
{
    var luku = parseInt(document.getElementById("numero").value);
    if ((luku % 4 == 0) && (luku % 100 !== 0))
    {
    document.write("Vuosi on karkausvuosi");
    }
    else if (luku % 400 == 0)
    {
    document.write("Vuosi ei ole karkausvuosi");
    }
    else {
    document.write ("Vuosi ei ole karkausvuosi");
    }
    }