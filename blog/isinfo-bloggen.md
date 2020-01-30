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

---

###25/1/19 - fixa deprecated
* Har idag gjort en deprecated-branch för den gamla lösningen av autentisering. Kände att jag ville ha kvar den ifall jag återvänder till den senare.
* Lyckades även splitta upp front-end, alltså rotmappen för isinfo, från dess api som låg i isinfo/api. Gjorde mha en gitignore. För närvarande är
nu frontend uppe på github, och därmed även online på Zeit Now. Api:n ligger istället uppe på heroku. Tycker att det funkar rätt smidigt.
* Angående gårdagens fråga: Zeit har en git integration feature, så att så fort jag pushar till GH så läggs senaste versionen upp. Rätt najs, kan jag tycka.
* Fixat i princip hela flödet för registrera/logga in nu, inklusive regga till min egen databas (whoo!)
* 

