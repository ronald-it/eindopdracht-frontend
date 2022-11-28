Inhoudsopgave:

1 Inleiding

2 Installatie

Inleiding

Dit is de installatiehandleiding voor de applicatie. De applicatie heeft vijf verschillende pagina´s, een homepage, een recipepage, een calculator page, login page en een registration page. Op de homepage kan men een recept of ingrediënt invullen in de zoekbalk en/of op basis van gerechtstype, keuken, dieet en/of bereidingstijd een zoekactie maken. Hierbij verschijnen bij geldige input 20 receptenkaarten waarop men kan klikken om op unieke recipepages te komen. Ook kan men klikken op een van de drie receptenkaarten in de carousel boven de zoekbalk. Op de recipepages staan de unieke gegevens van de desbetreffende recepten. Men kan op de calculator page een of meer producten invullen, op zoeken (search) klikken en vervolgens de product(en) toevoegen aan de calculator tabel door een portiegrootte in te vullen en op toevoegen (add) te klikken. Om toegang te krijgen tot de searchbar op de homepage en de content op de calculator page moet er ingelogd worden. Dit kan gedaan worden op de login page, maar eerst moet er een account geregistreerd worden op de registration page. Hieronder is een schermontwerp van de belangrijkste pagina, de homepage.

![Screenshot belangrijkste pagina](src/designs/homepage.jpg "Screenshot belangrijkste pagina")

Installatie

Om deze applicatie te kunnen gebruiken, zullen er eerst wat stappen genomen moeten worden om de installatie te voltooien.
In ieder geval moet de gebruiker van deze applicatie het programma Webstorm installeren en verder is ook node.js nodig.
Webstorm en node.js kunnen via de onderstaande twee links gedownload en vervolgens geïnstalleerd worden:

https://www.jetbrains.com/webstorm/

https://nodejs.org/en/download/

Zodra dit gelukt is en het project is geladen in Webstorm, moet er in de terminal npm install ingevoerd worden en op enter gedrukt worden.

Nu zijn er alleen nog API keys nodig in bepaalde Javascript bestanden, die ervoor zorgen dat er data opgehaald kan worden uit de Edamam API (voedsel/recepten/ingrediënten database).
De volgende API keys moeten tussen de aanhalingstekens achter const API_KEY worden geplaatst in de volgende bestanden:

Calculator page: 270cc5a42e9022d3b8f92f30feed3e6e

Homepage: e0b07558906ed952fb1226ace4bc0227

Recipe page: e0b07558906ed952fb1226ace4bc0227

Als deze API keys zijn ingevuld op de juiste plekken in de juiste bestanden, kan de applicatie gestart worden door middel van het commando npm start te typen in de terminal (linksonderin is er een knop om bij de terminal te komen) en op enter te drukken. Vervolgens kan er op de (normaal gesproken) localhost link geklikt worden die in de terminal verschijnt. Dit zal een venster openen in de browser en zorgt ervoor dat de homepage geladen wordt.