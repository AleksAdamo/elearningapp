# **Architekturdokumentation**

**Über arc42**

arc42, das Template zur Dokumentation von Software- und
Systemarchitekturen.

Erstellt von Dr. Gernot Starke, Dr. Peter Hruschka und Mitwirkenden.

Template Revision: 7.0 DE (asciidoc-based), January 2017

© We acknowledge that this document uses material from the arc 42
architecture template, <http://www.arc42.de>. Created by Dr. Peter
Hruschka & Dr. Gernot Starke.

# 1 Einführung und Ziele

Beschreibt die wesentliche Anforderungen und treibenden Kräfte, die
Softwarearchitekten und Entwicklungsteams berücksichtigen müssen. Dazu
gehören die

-   zugrunde liegenden Geschäftsziele, wesentliche Aufgabenstellung und
    essenzielle fachliche Anforderungen an das System

-   Qualitätsziele für die Architektur

-   relevante Stakeholder und deren Erwartungshaltung

## Aufgabenstellung

- Im Rahmen der Veranstaltung BWI50202 .NET Vertiefung soll eine Webanwendung erstellt werden. Die angestrebte technische Lösung für das Projekt soll folgende Bestandteile enthalten:
- Frontend (Präsentation + Geschäftslogik): Webanwendung (ASP. NET Core / Java EE)
- Backend (Geschäftslogik + Datenhaltung): Web Services (ASP .NET Core Web-API / Spring Boot & Java)
- Siehe Pflichtenheft.md
- Die Aufgabe liegt darin mit nur wenigen Vorgaben eine Webanwendung zu entwickeln, welche eigenständig konkretisiert und ausgearbeitet werden muss. In diesem Fall wurde eine eigene Projektidee vorgeschlagen und mit dem Dozenten abgestimmt. 

## Qualitätsziele

- Die Webanwendung muss für die verschiedenen Benutzer (insb. Studierende und Dozenten) übersichtlich sein
- Die Webanwendung muss performant sein (schnell sein)
- Die Webanwendung soll die Kontrollfragen zu verschieden Modulen und Fachbereichen enthalten können

- zu 1. jede Funktion muss schnell, d.h. mit max. 7(bis zu 10) Klicks erreichbar sein
- zu 2. die Webanwendung muss für mehrere Benutzer (für 50 Benutzer) gleichzeitig erreichbar sein, ohne dass es aus Sicht eines einzelnen Benutzers zu Laufzeiteinbußen kommt
- zu 3. Nach einem Jahr müssen >90% der Module in der Webanwendung sein und diese müssen Kontrollfragen erhalten.

- zu 1: Test der Webanwendung
- zu 1: Benutzertest mit Studierenden
- zu 2: Test der Webanwendung mit mehreren Benutzern (bis zu 50)
- zu 3: Statistische Auswertung: Zählen der Kurs in moodle und Vergleich mit dem Veranstaltungsangebot

## Stakeholder

| Rolle | Kontakt | Erwartungshaltung |

- | Prof. Dr. Daniel Retkowitz (Dozent) | daniel.retkowitz@hs-niederrhein.de | --- |
- | Tobias Jansen (Student) | Tobias.Jansen@stud.hn.de | Erfolgreiche Umsetzung des Projektes |
- | Henning Schilder (Student) | Henning.Schilder@stud.hn.de | Erfolgreiche Umsetzung des Projektes |
- | Jari Elfers (Student) | jari.elfers@stud.hn.de | Erfolgreiche Umsetzung des Projektes |
- | Aleks Adamovic (Student) | Aleks.Adamovic@stud.hn.de | Erfolgreiche Umsetzung des Projektes |
- | User (Student) | diverse | Erfolgreiche Nutzung der Anwendung |


# 2 Randbedingungen

**Inhalt.**

Fesseln und Vorgaben, die ihre Freiheiten bezüglich Entwurf,
Implementierung oder Ihres Entwicklungsprozesses einschränken. Diese
Randbedingungen gelten manchmal organisations- oder firmenweit über die
Grenzen einzelner Systeme hinweg.

**Motivation.**

Als Architekt sollten Sie explizit wissen, wo Ihre Freiheitsgrade
bezüglich Entwurfsentscheidungen liegen und wo Sie Randbedingungen
beachten müssen. Sie können Randbedingungen vielleicht noch verhandeln,
zunächst sind sie aber da.

**Form.**

Einfache Tabellen der Randbedingungen mit Erläuterungen. Bei Bedarf
unterscheiden Sie technische, organisatorische und politische
Randbedingungen oder übergreifende Konventionen (beispielsweise
Programmier- oder Versionierungsrichtlinien, Dokumentation- oder
Namenskonvention)

Technische Vorgaben

- Programmiersprache: Java/TypeScript
- Framework: Angular
- IDE: Visual Studio 2017
- Zielumgebung: Plattformunabhängig (Webanwendung)
- Grafische Darstellung: Webbrowser

Organisatorische Vorgaben

- Zeitrahmen: Mitte Oktober 2017 bis Mitte Januar 2018 (drei Monate)
- Team: Gruppe aus vier Studenten
- Dokumentation: Pflichtenheft und Architekturdokumentation
- Präsentation: 30 Min. bestehend aus PP-Präs. und Poster
- Versionsverwaltungssystem: GitHub, Trello (nur intern)

# 3 Kontextabgrenzung

- siehe: #3_Kontextabgrenzung_Kontextdiagramm.pdf

## Fachlicher Kontext

- siehe: #3_Fachlicher_Kontext_Frond-_Backend.pdf

## Technischer Kontext

- siehe: #3_Technischer Kontext_UML_Deployment_Diagramm.pdf

Beispielsweise UML Deployment-Diagramme mit den Kanälen zu
Nachbarsystemen, begleitet von einer Tabelle, die Kanäle auf
Ein-/Ausgaben abbildet.

**&lt;Diagramm oder Tabelle&gt;**

**&lt;optional: Erläuterung der externen technischen
Schnittstellen&gt;**

**&lt;Mapping fachliche auf technische Schnittstellen&gt;**

# 4 Lösungsstrategie

- Wir haben uns entschieden die Webanwendung („09-eLearningApp“) in der Programmiersprachen Java/Typescript zu entwickeln. Weiterhin haben wir uns entschieden VisualStudio als Entwicklungsumgebung zu nutzen.
- VisualStudio haben wir bereits in der Grundlagenveranstaltung kennen gelernt und intensiv genutzt, anfangs war geplant  ASP.NET Core MVC und das Entity Framework Core für unsere Entwicklung zu nutzen. Allerdings fiehl uns das Arbeiten damit sehr schwer.
- Gemeinsam haben wir uns dann entschieden Angular für die Entwicklung zu nutzen. Die Dokumentation zu Angular ist umfangreich und relativ leicht verständlich, weiterhin gab es seitens von Projektmitgliedern schon erste Erfahrungen mit Angular. 
- Die Zielumgebung soll plattformunabhängig sein, daher bietet sich Angular ebenfalls an. Die grafische Darstellung soll über einen Webbrowser realisiert werden. Das Pflichtenheft dient als Grundlage für den angestrebten Funktionsumfang, die vorhandenen Use-Cases unterstützen uns dabei die Funktionen umzusetzen. 
- Um die oben aufgeführten Qualitätsziele zu erreichen werden bei der Entwicklung stets umfangreiche Funktionstests durchgeführt, um mögliche Fehler schnell zu finden und zu eliminieren. 
- Die Bearbeitung des Projekts findet unter ständigem Austausch der Projektmitglieder statt. Zur Unterstützung der Kommunikation greifen wir auf das Versionsverwaltungssystem GitHub zurück. Die Entwicklung des Programmcodes wird hauptsächlich durch die Mitglieder mit dem höheren Verständnis für die Programmierung übernommen.
- Die anderen Mitglieder kümmern sich verstärkt um die Organisation und Dokumentation des Projektes.

# 5 Bausteinsicht

- siehe: #5_Bausteinsicht.pdf

Ebene-1
eLearning-App Whitebox-Sicht
• Zweck / Verantwortlichkeit: Gesamte eLearning Webanwendungen
• Schnittstelle(n): keine Nachbarsysteme (integrierte Datenbank)
• Erfüllte Anforderungen: 
• Ablageort / Datei: 
• Sonstige Verwaltungsinformation: Autor, Version, Datum, Änderungshistorie

Ebene-2
Log-In Whitebox-Sicht
• Zweck / Verantwortlichkeit: Ermöglicht den Zugang zur Anwendung 
• Schnittstelle(n): Modulwahl
• Erfüllte Anforderungen: 
• Ablageort / Datei: 
• Sonstige Verwaltungsinformation: Autor, Version, Datum, Änderungshistorie

Ebene-2
Modulwahl Whitebox-Sicht
• Zweck / Verantwortlichkeit: Dient der Auswahl der Studiengänge/Module
• Schnittstelle(n): Log-In / Abfragen (Kontrollfragen)
• Erfüllte Anforderungen: 
• Ablageort / Datei: 
• Sonstige Verwaltungsinformation: Autor, Version, Datum, Änderungshistorie

Ebene-2
Abfrage Whitebox-Sicht
• Zweck / Verantwortlichkeit: Dient der Durchführung der Abfragen (Kontrollfragen)
• Schnittstelle(n): Modulwahl / Fortschritt
• Erfüllte Anforderungen: 
• Ablageort / Datei: 
• Sonstige Verwaltungsinformation: Autor, Version, Datum, Änderungshistorie

Ebene-2
Fortschritt Whitebox-Sicht
• Zweck / Verantwortlichkeit: Ermöglicht den Benutzern die Überwachung Ihres Fortschritts
• Schnittstelle(n): Abfragen (Kontrollfragen)
• Erfüllte Anforderungen: 
• Ablageort / Datei: 
• Sonstige Verwaltungsinformation: Autor, Version, Datum, Änderungshistorie


Hier folgen jetzt Erläuterungen zu Blackboxen der Ebene 1.
- | Log-In | Ermöglicht den Login in die Anwendung mit Benutzername und Passwort |
- | Modulwahl | Ermöglicht dem Benutzer die Auswahl von Kursen (Modulen), zuvor muss der Benutzer aber den Log-In durchführen |
- | Abfrage | Ermöglicht dem Benutzer die Durchführung der Abfragen (Kontrollfragen), zuvor muss der Benutzer einen Kurs(Modul) ausgewählt haben |
- | Fortschritt | Ermöglicht dem Benutzer eine Übersicht über seine bisherigen Fortschritte/Erfolge, Fortschritte/Erfolge werden nur erzeugt wenn der Benutzer Abfragen (Kontrollfragen) durchgeführt hat |

Hier folgen jetzt Erläuterungen zu Blackboxen der Ebene 2.
- | Modulauswahl | Nach erfolgreicher Studiengangwahl muss der Benutzer ein passendes Modul auswählen, darauf folgt die Möglichkeit der Abfragen (Kontrollfragen) |

# 6 Laufzeitsicht

- siehe: #6_Aktivitätsdiagramm_Benutzersicht.pdf
- siehe: #6_Aktivitätsdiagramm_Adminsicht.pdf

# 7 Verteilungssicht

**Inhalt.**

Die Verteilungssicht beschreibt:

1.  die technische Infrastruktur, auf der Ihr System ausgeführt wird,
    mit Infrastrukturelementen wie Standorte, Umgebungen, Rechnern,
    Prozessoren, Kanälen und Netztoplogien sowie sonstigen Bestandteilen
    und

2.  die Abbildung von (Software-)Bausteinen auf diese Infrastruktur.

Häufig laufen Systeme in unterschiedlichen Umgebungen ab, beispielsweise
Entwicklung-/Test- oder Produktionsumgebungen. In solchen Fällen sollten
Sie alle relevanten Umgebungen aufzeigen.

Nutzen Sie die Verteilungssicht insbesondere, wenn Ihre Software auf
mehr als einem Rechner, Prozessor, Server oder Container abläuft oder
Sie Ihre Hardware sogar selbst konstruieren.

Aus Softwaresicht genügt es auf die Aspekte zu achten, die für die
Softwareverteilung relevant sind. Hardwarearchitekten können bei Bedarf
die Infrastruktur mit beliebigen Details beschreiben.

**Motivation.**

Software läuft nicht ohne Infrastruktur. Diese zugrundeliegende
Infrastruktur beeinflusst Ihr System und/oder querschnittliche
Lösungskonzepte, daher müssen Sie diese Infrastruktur kennen.

Das oberste Verteilungsdiagramm könnte bereits in Ihrem technischen
Kontext enthalten sein, mit Ihrer Infrastruktur als EINE Black-Box.
Jetzt zoomen Sie in diese Infrastruktur mit weiteren
Verteilungsdiagrammen hinein:

-   Die UML stellt mit Verteilungsdiagrammen (Deployment diagrams) eine
    Diagrammart zur Verfügung, um diese Sicht auszudrücken. Nutzen Sie
    diese, evtl. auch geschachtelt, wenn Ihre Verteilungsstruktur es
    verlangt.

-   Falls Ihre Infrastruktur-Stakeholder andere Diagrammarten
    bevorzugen, die Prozessoren und Kanäle zeigen, sind die hier
    ebenfalls einsetzbar.

## Infrastruktur Ebene 1

An dieser Stelle beschreiben Sie (als Kombination von Diagrammen mit
Tabellen oder Texten):

-   die Verteilung des Gesamtsystems auf mehrere Standorte, Umgebungen,
    Rechner, Prozessoren oä. sowie die physischen Verbindungskanäle
    zwischen diesen,

-   wichtige Begründungen für dieser Verteilungsstruktur,

-   Qualitäts- und/oder Leistungsmerkmale dieser Infrastruktur,

-   Zuordnung von Softwareartefakten zu Bestandteilen der Infrastruktur

Für mehrere Umgebungen oder alternatives Deployment kopieren Sie diesen
Teil von arc42 für alle wichtigen Umgebungen.

***&lt;Übersichtsdiagramm&gt;***

Begründung

:   *&lt;Erläuternder Text&gt;*

Qualitäts- und/oder Leistungsmerkmale

:   *&lt;Erläuternder Text&gt;*

Zuordnung von Bausteinen zu Infrastruktur

:   *&lt;Beschreibung der Zuordnung&gt;*

## Infrastruktur Ebene 2

An dieser Stelle können Sie den inneren Aufbau (einiger)
Infrastrukturelemente aus Ebene 1 beschreiben.

Für jedes Infrastrukturelement kopieren Sie die Struktur aus Ebene 1.

### *&lt;Infrastrukturelement 1&gt;*

*&lt;Diagramm + Erläuterungen&gt;*

### *&lt;Infrastrukturelement 2&gt;*

*&lt;Diagramm + Erläuterungen&gt;*

…

### *&lt;Infrastrukturelement n&gt;*

*&lt;Diagramm + Erläuterungen&gt;*

# 8 Querschnittliche Konzepte

**Inhalt.**

Dieser Abschnitt beschreibt übergreifende, prinzipielle Regelungen und
Lösungsansätze, die an mehreren Stellen (=*querschittlich*) relevant
sind.

Solche Konzepte betreffen oft mehrere Bausteine. Dazu können vielerlei
Themen gehören, beispielsweise:

-   fachliche Modelle,

-   eingesetzte Architektur- oder Entwurfsmuster,

-   Regeln für den konkreten Einsatz von Technologien,

-   prinzipielle, meist technische, Festlegungen übergreifender Art,

-   Implementierungsregeln

**Motivation.**

Konzepte bilden die Grundlage für *konzeptionelle Integrität*
(Konsistenz, Homogenität) der Architektur und damit eine wesentliche
Grundlage für die innere Qualität Ihrer Systeme.

Manche dieser Themen lassen sich nur schwer als Baustein in der
Architektur unterbringen (z.B. das Thema "Sicherheit"). Hier ist der
Platz im Template, wo Sie derartige Themen geschlossen behandeln können.

**Form.**

Kann vielfältig sein:

-   Konzeptpapiere mit beliebiger Gliederung,

-   übergreifende Modelle/Szenarien mit Notationen, die Sie auch in den
    Architektursichten nutzen,

-   beispielhafte Implementierung für insbesondere technische Konzepte,

-   Verweise auf "übliche" Nutzung von Standardframeworks
    (beispielsweise die Nutzung von Hibernate als Object/Relational
    Mapper.

**Struktur.**

Eine mögliche (nicht aber notwendige!) Untergliederung dieses
Abschnittes könnte wie folgt aussehen (wobei die Zuordnung von Themen zu
den Gruppen nicht immer eindeutig ist):

-   Fachliche Konzepte

-   User Experience (UX)

-   Sicherheitskonzepte (Safety und Security)

-   Architektur- und Entwurfsmuster

-   Unter-der-Haube

-   Entwicklungskonzepte

-   Betriebskonzepte

![Possible topics for crosscutting
concepts](images/08-Crosscutting-Concepts-Structure-DE.png)

## *&lt;Konzept 1&gt;*

*&lt;Erklärung&gt;*

## *&lt;Konzept 2&gt;*

*&lt;Erklärung&gt;*

…

## *&lt;Konzept n&gt;*

*&lt;Erklärung&gt;*

# 9 Entwurfsentscheidungen

**Inhalt.**

Wichtige, teure, große oder riskante Architektur- oder
Entwurfsentscheidungen inklusive der jeweiligen Begründungen. Mit
"Entscheidungen" meinen wir hier die Auswahl einer von mehreren
Alternativen unter vorgegebenen Kriterien.

Wägen Sie ab, inwiefern Sie Entscheidungen hier zentral beschreiben,
oder wo eine lokale Beschreibung (z.B. in der Whitebox-Sicht von
Bausteinen) sinnvoller ist. Vermeiden Sie Redundanz. Verweisen Sie evtl.
auf Abschnitt 4, wo schon grundlegende strategische Entscheidungen
beschrieben wurden.

**Motivation.**

Stakeholder des Systems sollten wichtige Entscheidungen verstehen und
nachvollziehen können.

**Form.**

Verschiedene Möglichkeiten:

-   Liste oder Tabelle, nach Wichtigkeit und Tragweite der
    Entscheidungen geordnet

-   ausführlicher in Form einzelner Unterkapitel je Entscheidung

-   ADR ([Architecture Decision
    Record](http://thinkrelevance.com/blog/2011/11/15/documenting-architecture-decisions))
    für jede wichtige Entscheidung

# 10 Qualitätsanforderungen

**Inhalt.**

Dieser Abschnitt enthält möglichst alle Qualitätsanforderungen als
Qualitätsbaum mit Szenarien. Die wichtigsten davon haben Sie bereits in
Abschnitt 1.2 (Qualitätsziele) hervorgehoben.

Nehmen Sie hier auch Qualitätsanforderungen geringerer Priorität auf,
deren Nichteinhaltung oder -erreichung geringe Risiken birgt.

**Motivation.**

Weil Qualitätsanforderungen die Architekturentscheidungen oft maßgeblich
beeinflussen, sollten Sie die für Ihre Stakeholder relevanten
Qualitätsanforderungen kennen, möglichst konkret und operationalisiert.

## Qualitätsbaum

**Inhalt.**

Der Qualitätsbaum ( a la ATAM) mit Qualitätsszenarien an den Blättern.

**Motivation.**

Die mit Prioritäten versehene Baumstruktur gibt Überblick über die
oftmals zahlreichen Qualitätsanforderungen.

-   Baumartige Verfeinerung des Begriffes „Qualität“, mit "Qualität"
    oder Nützlichkeit als Wurzel.

-   Mindmap mit Q-Oberbegriffen als Hauptzweige

In jedem Fall sollten Sie hier Verweise auf die Szenarien des folgenden
Abschnittes aufnehmen.

## Qualitätsszenarien

**Inhalt.**

Konkretisierung der (in der Praxis oftmals vagen oder impliziten)
Qualitätsanforderungen durch (Qualitäts-)Szenarien.

Diese Szenarien beschreiben, was beim Eintreffen eines Stimulus auf ein
System in bestimmten Situationen geschieht.

Wesentlich für die meisten Softwarearchitekten sind zwei Arten von
Szenarien:

-   Nutzungsszenarien (auch genannt Anwendungs- oder
    Anwendungsfallszenarien) beschreiben, wie das System zur Laufzeit
    auf einen bestimmten Auslöser reagieren soll. Hierunter fallen auch
    Szenarien zur Beschreibung von Effizienz oder Performance. Beispiel:
    Das System beantwortet eine Benutzeranfrage innerhalb einer Sekunde.

-   Änderungsszenarien beschreiben eine Modifikation des Systems oder
    seiner unmittelbarer Umgebung. Beispiel: Eine zusätzliche
    Funktionalität wird implementiert oder die Anforderung an ein
    Qualitätsmerkmal ändert sich.

**Motivation.**

Szenarien operationalisieren Qualitätsanforderungen und machen deren
Erfüllung mess- oder entscheidbar.

Insbesondere wenn Sie die Qualität Ihrer Architektur mit Methoden wie
ATAM überprüfen wollen, bedürfen die in Abschnitt 1.2 genannten
Qualitätsziele einer weiteren Präzisierung bis auf die Ebene von
diskutierbaren und nachprüfbaren Szenarien.

**Form.**

Entweder tabellarisch oder als Freitext.

# 11 Risiken und technische Schulden

**Inhalt.**

Eine nach Prioritäten geordnete Liste der erkannten Architekturrisiken
und/oder technischen Schulden.

**Motivation.**

"Risikomanagement ist Projektmanagement für Erwachsene" (Tim Lister,
Atlantic Systems Guild.)

Unter diesem Motto sollten Sie Architekturrisiken und/oder technische
Schulden gezielt ermitteln, bewerten und Ihren Management-Stakeholdern
(z.B. Projektleitung, Product-Owner) transparent machen.

**Form.**

Liste oder Tabelle von Risiko und/oder technischen Schulden, eventuell
mit vorgeschlagenen Maßnahmen zur Risikovermeidung, Risikominimierung
oder dem Abbau der technischen Schulden.

# 12 Glossar

**Inhalt.**

Die wesentlichen fachlichen und technischen Begriffe, die Stakeholder im
Zusammenhang mit dem System verwenden.

Nutzen Sie das Glossar ebenfalls als Übersetzungsreferenz, falls Sie in
mehrsprachigen Teams arbeiten.

**Motivation.**

Sie sollten relevante Begriffe klar definieren, so dass alle Beteiligten

1.  diese Begriffe identisch verstehen, und

2.  vermeiden, mehrere Begriffe für die gleiche Sache zu haben.

-   Zweispaltige Tabelle mit &lt;Begriff&gt; und &lt;Definition&gt;

-   Eventuell weitere Spalten mit Übersetzungen, falls notwendig.

| Begriff | Definition |
| --- | --- |
| *&lt;Begriff-1&gt;* | *&lt;Definition-1&gt;* |
| *&lt;Begriff-2&gt;* | *&lt;Definition-2&gt;* |


