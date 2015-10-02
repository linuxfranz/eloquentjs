#Chapter05 - Interessantes

## Funktionen in JS

* Funktionen in Javascript sind Werte (values) wie alle anderen Datentypen
* Funktionen erlauben Abstraktion von Konzepten (`forEach()`, `when()` usw.)
* Funktionen liefern auf einer höheren Ebene ein Vokabular, mit dessen Hilfe einfach neue Abstraktionen gebildet werden können
* Sie können insbesondere als Argumente bei Funktionsaufrufen übergeben werden und von Funktionen als Ergebnis zurückgegeben werden. Solche Funktionen nennt man *Funktionen höherer Ordnung* (higher order functions)
* Interessant ist dieses Konzept zum Beispiel zur Implementierung von *Actions*: Man gibt einen Algorithmus mit Lücken vor, der durch Funktionen, die als Parameter übergeben werden "gefüllt" wird
* innerhalb einer Funktion liefert `arguments` alle Parameter als Array
* `function.apply(object, arguments)` ruft eine Funktion mit den Parametern aus dem Array arguments auf (object ist das Objekt auf dem die Funktion als Methode aufgerufen werden soll, kann null sein)
* `function.call(object, arg1, arg2,...)` wie apply() aber die Argumente werden nicht in einem Array sondern einzeln übergeben

## JSON (Javascript Object Notation)

* Javascript-Objekte {} und -Arrays [] beliebig verschachtelt
* Objekt-Properties müssen immer in Anführungszeichen gesetzt werden
* können nur einfache Datentypen (Integer, Boolean, String, Float) enthalten, aber keine Funktionen oder Ausdrücke
* `JSON.stringify()` und `JSON.parse()` dienen zum serialisieren und deserialisieren von JSON

## Nützliche Funktionen höherer Ordnung, die auf Arrays arbeiten

* `array.forEach(function)`: ruft function für jedes Element von Array auf
* `array.filter(function)` liefert ein neues Array mit allen Elementen, für die function `true` liefert
* `array.map(function)` liefert ein neues Array, das die Elemente nach Anwendung von function auf die ursprünglichen enthält
* `array.reduce(function(a,b), start)`: Reduziert die Werte eines Arrays durch wiederholte Anwendung von function mit jeweils einer Laufvariablen und einem Element von array als Parameter auf alle Elemente. start ist der Ausgangswert für die Laufvariable, falls nicht angegeben, wird das erste Element von array genommen
* Hauptvorteil der Funtktionen höherer Ordnung ist die Möglichkeit sie zu kombinieren `reduce(map(filter()))` etc. was einfachen aussagekräftigen Code ermöglicht, aber u.U. auch ineffizient sein kann (Speicher für neue Arrays, Funktionsaufrufe in JS sind ineffizient verglichen mit einfachen Schleifen)
* `function.bind(object, var,...)` liefert function mit einem Teil der Parameter vorbelegt (var...), sog. teilweise Anwendung einer Funktion (partial application)
