# Chapter07 Project: Electronic Life - Interessantes

## Das (Scope-)Problem mit `this`

* Mit `this` kann man nur unmittelbar innerhalb einer Methode eines Objekts auf
das Objekt zugreifen. Befindet man sich in einer inneren Funktion, so bezieht sich
`this` dagegen auf das globale Objekt (das gilt für alle Funktionen, die nicht als
  Methoden eines Objekts aufgerufen werden.)

### Lösung 1:
Man definiert im Konstruktor ein `var self = this;` damit ist this
über self überall als normale Variable zugreifbar.

### Lösung 2:
Man kann mit function() {}.bind(this); explizit das `this` des aufrufenden
  Objekts an die Funktion übergeben.

### Lösung 3:
Viele Methoden höherer Ordnung auf Arrays (map, forEach...) haben neben der Funktion auch einen optionalen zweiten Parameter, über den das `this`
des aufrufenden Kontext übergeben werden kann, also etwa `arr.map(function(){}, this)`

## Wie schreibt man selbst Methoden höherer Ordnung?

Will man z.B. ein foreach(function, args) schreiben, so kann man dies mit Hilfe von `function.call()` folgendermassen:

```javascript
foreach = function(f, context) {
  f.call(context, more, args);
}
```
