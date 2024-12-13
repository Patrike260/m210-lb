# M210-LB Medienbibliotek

## UseCase

1. User kann sich registrieren/Anmelen 
2. User kann seine bibliothek anschauen
3. user kann neue medien hinzufügen
4. User kann nach kategorie umschalten

## Arbeitsplan

1. Neues react Project erstellen
2. Neues superbase project erstellen
3. Tabelle erstellen
4. User erstellen
5. Berechtigungen verwalten
6. Login/Regiestrirung einrichten
7. Tabelle anzeigen
8. Inhalt hinzufügen einbinden
9. Inhalt sortieren
10. CSS herbeizaubern
11. Testen


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
