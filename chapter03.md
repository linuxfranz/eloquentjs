# Chapter03 - Interessantes

* Funktionen sind Werte (values) wie alle anderen Daten (z.B. Zahlen, Zeichenketten)
* Man kann Funktionen auf zweierlei Weise definieren:
  * Als Zuweisung zu einer Variablen var func = function() {...}
  * "Herkömmlich" mit functon() {...}
* Parameter von Funktionen und Variablen in einer Funktion sind lokal zu dieser.
* Funktionen können innerhalb von anderen Funktionen deklariert sein und sind dann lokal zu diesen.
* Funktionen können als Rückgabewerte von Funktionen geliefert werden.
* Funktionen, die als Werte definiert werden "umschliessen" alle Variablen in ihrem lokalen Geltungsbereich ("Scope") mit den zum Definitionszeitpunkt gültigen Werten. Eine so definierte Funktion zusammen mit den Werten aller lokalen Variablen nennt man "Closure".
  * Bsp.: 
  Hat man eine Funktion, die zwei Parameter x und y hat und die als Rückgabewert eine Funktion liefert, die x * y berechnet und zurückgibt, aber nur den Parameter x hat, so kann man durch Aufrufen dieser Funktion mit Vorbelegungen für y neue Funktionen erzeugen, die ihre Parameter mit einem festen y multiplizieren.

