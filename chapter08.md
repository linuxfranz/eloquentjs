# Chapter07 Bugs and Error Handling - Interessantes

## Strict Mode
Wenn man am Anfang eines Programms oder einer Funktion `"use strict";` (ja, das
ist tatsächlich ein String-Literal.) schreibt, so ist Javascript etwas
kritischer bei der Prüfung des Codes:
* Globale var werden nicht mehr stillschweigend erzeugt, wenn man das `var` vor
  einer Variablendefinition vergisst, sondern es gibt einen Fehler
* `this` wird in Funktionen, die nicht als Methoden aufgerufen werden (also einem
  Aufruf ohne Binding für this) mit `undefined` belegt. Damit wird verhindert, dass
  in diesem Fall Properties einfach stillschweigend im Globalen Objekt abgelegt werden.
  Statt dessen gibt es einen Fehler, da this undefined ist.
* Prüfung ob einer Funktion mehrere Parameter mit gleichem Namen übergeben werden.
* Das Konstrukt `with` kann nicht verwendet werden, da schlecht(?)

## Testen
Man sollte zu jeder implementierten Funktionalität einen Test schreiben, der diese
überprüft. Es gibt auch Test-Frameworks für Javascript:
* https://qunitjs.com/
* http://stackoverflow.com/questions/300855/javascript-unit-test-tools-for-tdd

## Debugging
* Primitives Debugging mit `console.log()`-Ausgaben.
* Zum Debuggen die Browser-Tools nutzen, z.B. Firefox "Entwicklerwerkzeuge -> Debugger",
  bzw. <STRG><SHIFT>-I
* Man kann in den Quelltext die Anweisung `debugger` einfügen, dann wird die
  Ausführung dort angehalten (aber nur, wenn die Entwicklerwerkzeuge aktiv
  sind!) und man kann im geöffneten Debugger die Variablen usw. inspizieren.

# Fehlerbehandlung
* Javascript hat ein `try..catch..finally` Konstrukt analog zu Java
* Um eine Exception zu werfen nutzt man `throw new Error("Message")`
* Exceptions haben ein Property `stack`, das den Aufruf-Stack zum Fehlerzeitpunkt enthält
* Man kann eigene Arten von Error definieren, die von Error erben:

```javascript
function MyError(message) {
  this.message = message;
  this.stack = (new Error()).stack;
}
MyError.prototype = Object.create(Error.prototype);
MyError.prototype.name = "MyError";
```

* Um nur bestimmte Errors zu "fangen" muss man im `catch` mit `instanceof` den
  Typ abfragen, da Javascript keine direkte Einschränkung auf bestimmte Exceptions
  im `catch` unterstützt wie Java.

# Assertions
* Man kann sich in Javascript eine Funktion `assert` definieren, die im Fehlerfall
  eine Exception vom Typ `AssertionFailed` schmeisst:

```javascript
  function AssertionFailed(message) {
  this.message = message;
}
AssertionFailed.prototype = Object.create(Error.prototype);

function assert(test, message) {
  if (!test)
    throw new AssertionFailed(message);
}
```
