//Tehtävä1
class Henkiloluokka {
    constructor (etunimi, sukunimi, ika)
    {
        this.etunimi = etunimi;
        this.sukunimi = sukunimi;
        this.ika = ika;
    }
    //Tehtävä3
    naytaTiedot()
    {
        console.log(`Etunimi: ${this.etunimi}, Sukunimi:${this.sukunimi}, Ikä:${this.ika}`); 
    }
}
    const risto = new Henkiloluokka("Risto", "Reipas", 10);
    console.log(risto.etunimi);
    console.log(risto.sukunimi);
    console.log(risto.ika)
    //Tehtävä2
    risto.sukunimi = " Reippaampi"
    risto.ika = 11
    risto.naytaTiedot();
