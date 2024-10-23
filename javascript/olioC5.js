class Elain 
{
    constructor(nimi)
    {
    this._nimi = nimi;
    }
    get nimi()
    {
        return this._nimi;
    }
    set nimi(uusinimi)
    {
    this._nimi = uusinimi;
    }
    Syo() {
        console.log(this.nimi + " syö - mumm mumm mumm");
    }
}
const kana = new Elain("kukko");
kana.nimi = "kaakattaja";
console.log("Kanan uusi nimi: " + kana.nimi);

kana.Syo();



