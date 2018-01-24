# **Pflichtenheft**

**Über diese Vorlage**

Quelle: *Helmut Balzert, Lehrbuch der Softwaretechnik: Basiskonzepte und Requirements Engineering, 3. Auflage, Spektrum Akademischer Verlag Heidelberg, 2009.*

# 1 Visionen und Ziele
Beschreibung der Visionen und Ziele, die durch den Einsatz des Systems erreicht werden sollen:

Visionen
- /Vision 1/ Eine eLearning Webanwendung/App zu entwickeln, die darüber hinaus leicht zu bedienen ist und somit das Lernen fördern soll.
- /Vision 2/ Eine eLearning Webanwendung/App zu entwickeln, die eine Alternative zur Prüfungsvorbereitung bietet oder zu mindestens eine (sehr) gute Ergänzung darstellt.
- /Vision 3/ Die Noten der Studenten verbessern sich so gut, dass die Prüfungsanforderungen erschwert werden und der Fachbereich 08 (Wirtschaftswissenschaften) als Elite-Studiengang angesehen wird.

Ziele
- /Ziel 1/ Der Anwender (i.d.R. Student) soll die eLearn Webanwendung auf allen aktuellen Browsern nutzen können. Die Anwendung soll auch auf allen Betriebssystemen laufen können.
- /Ziel 2/ Die Durschnittsnote aller Anwender soll sich bei regelmäßiger Nutzung verbessern
- /Ziel 3/ Die Anwendung soll leicht zu bedienen sein, sowohl für den Anwender als auch für den Administrator.
- /Ziel 4/ Nur registrierte User haben Zugriff auf die Funktionen der Webanwendung/App

# 2 Rahmenbedingungen
Beschreibung der organisatorischen Rahmenbedingungen: Anwendungsbereiche, Zielgruppen, Betriebsbedingungen

- /AnwB/ Die Anwendung soll als Lernhilfe und Prüfungsvorbereitung fungieren.
- /ZielG/ Die Zielgruppe der Anwendung sind Studenten der Hochschule Niederrhein des Fachbereichs 08 (Wirtschaftswissenschaften). Eine Ausweitung auf andere Fachbereiche und Studiengänge wäre zu einem späteren Zeitpunkt denkbar. 
- /BetrBe1/ Die Webanwendung muss über einen computer im Browser laufen. Irgendwas soll dies auch als App auf Smartphones betrieben werden können
- /BetrBe2/ Die eLearning-App soll 24 Stunden und 7 Tage die Woche nutzbar sein.
- /BetrBe3/ unbeaufsichtigter Betrieb, die Anwender sollen die Webanwendung selbständig nutzen können.

Bei der technischen Produktumgebung sind folgende Festlegungen zu treffen:

- /R60/ Microsoft Visual Studio als IDE in Verbindung mit Angular (TypeScript-basiertes Front-End-Webapplikationsframework)
- /R70/ Computer/Notebook 
- /R80/ Organisatorische Randbedingungen und Voraussetzungen  

- Zeitrahmen: Mitte Dezember 2017 bis Mitte Januar 2018
- Team: Einzelarbeit
- Dokumentation: Pflichtenheft und Architekturdokumentation
- Präsentation: 30 Min. bestehend aus Programmcode-Vorstellung, Vorführung der Anwendung und Visualisierung der Use-Cases
- Versionsverwaltungssystem: GitHub, Trello (nur intern zur Aufgabenübersicht)

Bei den Anforderungen an die Entwicklungsumgebung sind folgende Festlegungen zu treffen:

- /R90/  Visualstudio 2017 Community
- /R100/ Computer/Notebook
- /R110/ GitHub
- /R120/ moderner Brwoser oder mindestenst Windows Explorer 9 und höher

# 3 Kontext und Überblick
Festlegung der relevanten Systemumgebung (Kontext) und Überblick über das System:

- /K10/(Student) User Login <<extend>> Registrieren
- /K20/(Student) Kurs(Modul) auswählen
- /K30/(Student) Abfrage starten
- /K40/(Student) Fortschritt ansehen
- /K50/(Student) User Logout

- /K50/(Admin) User Login
- /K60/(Admin) Kurs(Modul) anlegen/bearbeiten/löschen
- /K90/(Admin) User Logout

*Zum Beispiel auch: Übergreifendes Use Case Diagramm.* (-> Siehe "Dokumentation/*UseCases*.png")

# 4 Funktionale Anforderungen
Die Kernfunktionalität des Systems ist aus Auftraggebersicht auf oberster Abstraktionsebene zu beschreiben. Auf Detailbeschreibungen ist zu verzichten:

- /F10/ Das System muss dem Anwender (Studenten) die Möglichkeit bieten sich zu registrieren, um sich in die Anwendungen einloggen zu können.
- /F20/ Das System muss dem Anwender (Studenten) die Möglichkeit bieten sich einzuloggen, um die Anwendung nutzen zu können.
- /F30/ Das System muss dem Anwender (Studenten) die Möglichkeit bieten verschiedene Kurse auswählen zu können, um die gewünschten Abfragen durchführen zu können.
- /F40/ Das System muss dem Anwender (Studenten) die Möglichkeit bieten sich auszuloggen, damit kein anderer auf die Daten des Anwender zu greifen kann.
- /F60/ Das System muss dem Administrator die Möglichkeit bieten sich einzuloggen, um vollen Zugriff auf die Anwendung zu haben.
- /F70/ Das System muss dem Administrator die Möglichkeit bieten Kurse(Module) anzulegen/zu bearbeiten/zu löschen, um die Anwendung zu vervollständigen bzw. zu aktuallisieren.
- /F80/ Das System soll nur dem Administrator die Möglichkeit bieten vollen Zugriff auf die Anwendung zu haben, damit die Anwendung geschützt ist.

*Zum Beispiel auch: Beischreibung einzelner Use Cases in Textform.*

Wenn bereits möglich, sind die funktionalen Anforderungen nach Statik, Dynamik und Logik zu gruppieren.

# 5 Qualitätsanforderungen
Es sollte anhand einer Tabelle eine verfeinerte Qualitätszielbestimmung für das System vorgenommen werden. Es eignen sich dazu die Qualitätsmerkmale der ISO/IEC 9126–1.
Einzelne Qualitätsanforderungen können unter Bezug auf die ISO/IEC 9126–1 wie folgt festgelegt werden:


- /QFS10/ Die Anwender dürfen keinen Zugriff auf Daten anderer User haben.
- /QBE10/ Die Anwendung soll schlicht und übersichtlicht gestaltet sein, damit die Anwender sich schnell zu recht finden.
- /QBE20/ Die Anwendung muss performant sein.
- /QBE30/ Die Anwendung soll in der deutschen Sprachen sein.
- /QBE40/ Die Anwendung soll zahlreiche Kurse (Module) und Kontrollfragen enthalten.

# 6 Abnahmekriterien
Abnahmekriterien legen fest, wie Anforderungen bei der Abnahme auf ihre Realisierung überprüft werden können.

Eine Auswahl an Abnahmekriterien der Qualitätsanforderungen:

-	zu QBE10. jede Funktion muss schnell, d.h. mit max. 7(bis zu 5) Klicks erreichbar sein
-	zu QBE40. Nach einem Jahr müssen >90% der Module in der Webanwendung sein und diese müssen Kontrollfragen erhalten.

-	zu QBE10: Test der Webanwendung
-	zu QBE10: Benutzertest mit Studierenden
-	zu QBE40: Statistische Auswertung: Zählen der Kurs in moodle und Vergleich mit dem Veranstaltungsangebot

# Glossar
Das Glossar besteht aus Glossarbegriffen mit anschließender Erklärung des jeweiligen Begriffs. Wird auf andere Glossarbegriffe verwiesen, dann wird dies durch einen Pfeil vor dem Begriff, auf den verwiesen wird, angegeben. Übersetzungen in andere Sprachen sowie Synonyme werden in Klammern hinter dem Glossarbegriff angegeben.
