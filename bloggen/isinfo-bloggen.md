#ISINFO-BLOGGEN

###24/1/19 - få upp db på heroku
*Status*
* Servern är deployad på Heroku tillsammans med databasen, men det går inte att öppna appen via URLen. 
Okänt fel dyker upp när man försöker att starta den.
* Frontend är ännu inte deployad
* Lokala frontend lyckas inte connecta till servern heller

*Åtgärder*
1. Få Heroku-servern att fungera mha webdev-tutorial. Krav: kunna få svar från servern med get och getposts
2. Få lokal frontend att connecta till servern. Krav: ska koppla till remote-databasen (om möjligt) för att slippa
att slippa ha två olika versioner - en lokal och en remote

*Resultat*
* Servern på Herokuappen fungerar, även getposts!!
* Lyckades få lokal frontend att koppla upp sig till Herokus databas
* Lyckades även, lite oklart, deploya till Zeit Now. Nu funkar frontend alltså ONLINE och det går t.o.m. att
registrera en användare!!

*Nästa gång*
* Lista ut vad som egentligen försiggår på Zeit...
* Göra så att användare som registrerar sig över auth0 också läggs in i databasen
