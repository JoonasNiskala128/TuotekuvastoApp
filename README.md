-HomeContoroller vastaa siitä, että sovellus pystyy käsittelemään tuotteiden näyttämiseen liittyiviä pyyntöjä. Siinä luodaan products lista, johon tuotteet ladataan GetProducts metodilla. Metodi hakee tuotteiden tiedot JSON tiedostosta products.json, jonka jälkeen Json deserializer muuntaa tiedot lista muotoon

-Product.cs sisältää tuotteiden ominaisuudet (properties) 

-Product.cshtml on Razor näkymä, jossa käytetään silmukkaa tuotteiden iterointiin ja yksittäisen tuotteen tietojen näyttämiseen. Jokaisesta tuotteesta luodaan html elementti, jonka sisällä on kuva, nimi, kuvaus ja hinta

-Layout.cshtml sisältää pääasiallisen ulkoasun sivustolle

-site.js tiedostossa on JavaScript koodi, joka ajetaan kun sivu latautuu. Sen tehtävänä on muuttaa elementin alkukirjaimet isoksi ja muokata hintanäkymää tuotteissa

-site.css sisältää tyylisäännöt, jotka määrittävät tuoteluettelon asettelun
