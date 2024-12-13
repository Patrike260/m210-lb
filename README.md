# M210-LB Medienbibliotek

## Pitch
Ich habe mir vorgenommen eine Seite mit logging einzurichten wo jeder user seine eigene Tabelle/Liste sieht mit allen Medien die er kunsumirt hatt, und wie er sie bewertet hatt. Also eine Tabelle wo man Game, Serien, Filme oder Bücher eintragen und Bewerten kann.

## UseCase

1. User kann sich registrieren/Anmelen 
2. User kann seine bibliothek anschauen
3. User kann neue medien hinzufügen
4. User kann nach kategorie umschalten

## Arbeitsplan

| Schritt                  | Beschreibung                        | Geschätzter Arbeitsaufwand |
|--------------------------|------------------------------------|----------------------------|
| 1. Neues react Project erstellen | Ein neues React-Projekt initialisieren und einrichten | 0.25 Stunden                   |
| 2. Neues supabase project erstellen | Ein neues Supabase-Projekt auf der Plattform erstellen | 0.25 Stunde                    |
| 3. Tabelle erstellen     | Datenbanktabellen im Supabase-Projekt erstellen | 0.25 Stunde                    |
| 4. User erstellen        | Benutzer für das Projekt erstellen und konfigurieren |  0.1 Stunde                    |
| 5. Berechtigungen verwalten | Rechte und Policies für Benutzerzugriff festlegen | 0.5 Stunden                   |
| 6. Login/Registrierung einrichten | Authentifizierungs- und Registrierungs-Mechanismen implementieren | 0.5 Stunden                   |
| 7. Tabelle anzeigen      | Daten aus der Tabelle im Frontend anzeigen | 0.5 Stunden                   |
| 8. Inhalt hinzufügen einbinden | Funktionalität hinzufügen, um Daten in die Tabelle einzufügen | 0.5 Stunden                   |
| 9. Inhalt sortieren      | Sortier- und Filterfunktionen implementieren | 0.5 Stunden                   |
| 10. CSS herbeizaubern    | Modernes, ansprechendes Design mit CSS erstellen | 0.25 Stunden                   |
| 11. Testen               | Projekt gründlich testen und Fehler beheben | 0.25 Stunden                   |




## Arbeitsschritte

1. neues react project anlegen
``` 
npm create vite@latest "projektname" -- --template react wir verwenden react framework 
```
```
npm install @supabase/supabase-js @supabase/auth-ui-react @supabase/auth-ui-shared
```

2. auf https://supabase.com einloggen und ein neues project einrichten.

3. im Dashbord von superbase eine neue tabelle erstellen
    in der tabelle den fremdschlüssel user_id hinzufügen um die berechtigungen einrichten zu können
4. Manuel ein User erstellen um loging zu überprüfen (im Dashbord)
5. Bei Authentication neue Policies einrichten damit jeder user nur seine eigene Tabelle sehen kann und nur in seiner "tabelle" werte eintragen
6. Login Page einrichten so das wen der User bereits eingelogt ist direkt zur Tabelle kommt
7. in App.jsx Tabelle einbinden und verbindung zum Backend einhäckeln
8. Funktion hinzufügen um neue einträge zu erstellen
9. Sortierfunktion so dass man die Kategorien auswählen kann. Und man kann nach neusten eintrag und beste Bewertung sortieren.
10. CSS mithilfe von ChatGPT herbeigezaubert
11. Ich kan neuen user erstellen der eine Emali als bestätigung bekommt. Danach kann ich einträge in meiner tabelle erstellen.

## Arbeitszeiten

| Schritt                  | Beschreibung                        | IST Arbeitsaufwand |
|--------------------------|------------------------------------|----------------------------|
| 1. Neues react Project erstellen | Ein neues React-Projekt initialisieren und einrichten | 0.3 Stunden                   |
| 2. Neues supabase project erstellen | Ein neues Supabase-Projekt auf der Plattform erstellen | 0.1 Stunde                    |
| 3. Tabelle erstellen     | Datenbanktabellen im Supabase-Projekt erstellen | 0.1 Stunde                    |
| 4. User erstellen        | Benutzer für das Projekt erstellen und konfigurieren | 0.1 Stunde                    |
| 5. Berechtigungen verwalten | Rechte und Policies für Benutzerzugriff festlegen | 1 Stunden                   |
| 6. Login/Registrierung einrichten | Authentifizierungs- und Registrierungs-Mechanismen implementieren | 0.8 Stunden                   |
| 7. Tabelle anzeigen      | Daten aus der Tabelle im Frontend anzeigen | 0.2 Stunden                   |
| 8. Inhalt hinzufügen einbinden | Funktionalität hinzufügen, um Daten in die Tabelle einzufügen | 0.5 Stunden                   |
| 9. Inhalt sortieren      | Sortier- und Filterfunktionen implementieren | 0.25 Stunden                   |
| 10. CSS herbeizaubern    | Modernes, ansprechendes Design mit CSS erstellen | 0.1 Stunden                   |
| 11. Testen               | Projekt gründlich testen und Fehler beheben | 0.25 Stunden                   |

## Arbeitsjornal

Am anfang kleine startprobleme beim erstellen eines neuen react-Project, aber dan mit dem richtigen befehl aus der Präsentation von M294 hats geklappt. 

Neuer supabase-Project erstellen hat supper geklappt. 

Beim erstellen der Tabelle habe ich aber zuest vergessen den user_id als fremdschlüssel einzubinden. Mithilfe von Sven konnte ich das beheben und habe anschliesend auch die berechtigungen auf der tabelle zuweisen können. Da ich den Code von Quickstart übernommen hatte hatte ich den Falschen Projekt URL und Key. Nachdem ich das richtige eingetragen hatt das Login/Registrieren einwandfei funktioniert. 

Befohr ich mich um die Tabelle gekümmert habe, habe ich einen Branch erstellt, weil bis dahin alles funtioniert hat. 

Beim darstellen der Tabelle hatte ich wenig probleme, auch die Hinzufüge und sortierfunktion haben keine mühen bereitet. 

Beim CSS habe ich es mir einfach gemacht und hab ChatGPT gefragt ob er mir ein helles und modernes CSS erstellen kann, das habe ich reinkopiert und hat mir sofort gefallen. 

Danach habe ich mithilfe von Kunga die Brach wieder ins main gemarcht.

## Reflektion

- User können sich **erfolgreich** Registrieren und Einloggen
- User können **erfolgreich** ihre eigene Tabelle einsehen
- User können **erfolgreich** neue Medien eintragen
- User können **erfolgreich** nach Kategorie filtern und nach Datum oder Bewertung sortieren.

## Hilfmittel

- Folien aus M294 und M211
- Hilfe von Sven um fehler zu beheben und berechtigungen korekt zuzuweisen
- anleitungen auf https://supabase.com/docs
- ChatGPT
- Konga hilfe bei Git mercht weil ich angst hatte was falsch zu machen