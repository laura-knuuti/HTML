class kuvakirja {
    //yksityinen muuttuja
    #SivujenLukumaara;
    //Konstruktori jolla voi antaa sivumäärän
    constructor (sivumaara=16) {
    this.#SivujenLukumaara = sivumaara;
    }
    //Metodi sivumäärän hakemiseksi
    haeSivumaara() {
        return this.#SivujenLukumaara;
    }
}

//Luodaan Kuvakirja-olio oletuskonstruktorilla
const kuvakirjaOletus = new kuvakirja();
console.log ("Oletussivumäärä " + kuvakirjaOletus.haeSivumaara());
//Luodaan Kuvakirja-olio antamalla itse sivumääräksi 24
const uusiKuvakirja = new kuvakirja (24);
console.log ("Mukautettu Sivumäärä: " + uusiKuvakirja.haeSivumaara());
