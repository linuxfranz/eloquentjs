# Chapter09 Regular Expressions - Interessantes

## Wie man reguläre Ausdrücke erzeugt
1. mit Konstruktor: `var regex = new RegExp("abc");`
2. direkt: `var regex = /abc/;`

Der Vorteil der direkten Notation (2.) ist, dass man Backslashes nicht verdoppeln muss um ein Sonderzeichen zu escapen.

## Testen ob ein regulärer Ausruck passt
`regex.test("zu testender String");`

## Matchen eines regulären Ausdrucks
`regex.exec("zu matchender String");`
Gibt null, wenn Ausdruck nicht passt und sonst ein Objekt mit Informationen.
Dieses Objekt hat folgende Properties:
* `index` Stelle in dem String an der der Ausdruck passte
* Objekt ist ein Array mit
* `[0]` gesamter Ausdruck, der passte
* `[1]` und folgende: alle Gruppen `(..)`, die passten, wobei
  * wenn eine Gruppe nicht passte `undefined`
  * wenn eine Gruppe mehrmals passte nur das letzte Vorkommen

Strings haben eine `match` Methode, die ähnlich funktioniert:
`'ein String'.match(/String/)`

## `Date` Klasse
* `new Date()` erzeugt neues Date mit Zeitpunkt jetzt
* `new Date(2011,11,9)` erzeugt neues Date 9.12.2011 (_Monate fangen bei 0 an!_), optional können noch Stunden, Minuten und Millisekunden übergeben werden
* `date.getTime()` gibt die Millisekunden seit 1. Januar 1970 (negativ davor), den sog. Timestamp
* `new Date(millis)` erzeugt ein Date aus einem Timestamp
* Date.now gibt den aktuellen Timestamp
* die Methoden `getFullYear()`, `getMonth()` und `getDay()` liefern die einzelnen Komponenten eines Date

## Wort- und String-Grenzen
* `^` passt auf den Anfang und `$` auf das Ende eines Strings
* `\b` passt auf Wortgrenzen, also Anfang und Ende eines Worts (auch auf Anfang / Ende eines Strings!)
* Diese Grenz-Markierungen haben selbst keine Ausdehnung, d.h. sie _markieren_ nur die Grenzen, dienen also als _Anker_.

## Die `replace()` Methode
* `string.replace(a, b)` ersetzt ein Vorkommen von b in string durch a und gibt das Ergebnis zurück
* a kann auch ein regulärer Ausdruck sein. Mit der Flag `/regex/g` werden alle Vorkommen ersetzt.
* Man kann in der Ersetzung b auch auf in a definierte Gruppen zugreifen über `$1`, `$2` usw.
