# Fem små opgaver - opgave 4



* I en javascript fil knyttet til dokumentet opgave4.html, definér funktionen `skjulElementViaCssSelector`:

	* Den skal tage imod ét parameter: `cssSelector`

	* Den skal lede efter et element vha. den modtagede cssSelector.

	* Hvis elementet bliver fundet, skal den sætte dets `display` til `"none"`.

	* Funktionen behøver kun at kunne arbejde med ét element ad gangen.

* Indsæt et par elementer direkte i HTML'en (uden JavaScript).

* Demonstrér at din funktion kan skjule hvilket som helst element ved at kalde den således (disse er bare eksempler):


```javascript
skjulElementViaCssSelector (".produkt  .koebKnap");
skjulElementViaCssSelector (".profil  img");
```

## Ekstraopgave 1:

*(NICE TO HAVE - hvis du var hurtigt færdig)*

* Opret en `"opgave4_ekstra"` fil og løs nedenstående opgave i denne.

* Definér funktionen `skjulElement`:

	* Den skal tage imod ét parameter: `element`

	* Hvis den modtagede element-variabel ikke er `null` skal den sætte elementets display til `"none"`.

* Redigér din forrige funktion, `skjulElementViaCssSelector` så den gør følgende:

	* Den skal tage imod ét parameter: `cssSelector`

	* Den skal lede efter et element vha. den modtagede cssSelector.

	* Den skal kalde din anden funktion, `skjulElement` og give den det fundne element som argument.


## Ekstraopgave 2:

*(VERY NICE TO HAVE - vend evt. tilbage til denne efter opgave 5)*

* Opret en `"opgave4_ekstra2"` fil og løs nedenstående opgave i denne.


Redigér dine funktioner, så de kan manipulere flere elementer på én gang.

Man skal f.eks. kunne kalde en funktion således:

```javascript
skjulElementViaCssSelector (".produkt  img");
```

hvilket bør i dette tilfælde påvirke alle `<img>` tags inden i `".produkt"` elementet.<br>
Hvis du laver denne ekstraopgave bør du nok omdøbe funktionerne, så "Element" står i flertal.
