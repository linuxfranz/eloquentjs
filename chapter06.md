#Chapter06 Objekte - Interessantes

## Methoden

Methoden sind Properties eines Objekts, die als Values Funktionen enthalten.
Innerhalb von Methoden (Aufruf `object.methode()`) kann man auf das Objekt über
`this` zugreifen und z. B. weitere Properties des Objekts verwenden.

## Prototype

* Objekte haben in der Regel ein Prototype-Objekt, das man mit `Object.getPrototypeOf(obj)` abfragen kann.
* Wenn ein Property nicht in einem Objekt gefunden wird, so wird es in dessem Prototyp gesucht
und dann in dessem Prototyp usw. bis zu `Object.prototype`.  
* An der Wurzel der Prototyp-Hierarchie ist`Object.prototype`, das grundlegende
  Methoden wie z. B. `toString()` enthält.
* Um ein Objekt mit einem bestimmten Prototype zu erzeugen, verwendet man
  `Object.create(prototype)`.

## Konstruktor

* Eine Funktion, die mit `new Function()` aufgerufen wird nennt man einen Konstruktor
für Objekte.  
* Er kann Argumente erhalten, im  Rumpf kann dann über `this` auf das
neue Objekt zugegriffen werden und z. B. Properties gesetzt werden.  
* Es ist Konvention, die Namen von Konstruktoren mit Grossbuchstaben zu beginnen.  
* Jeder Konstruktor (jede Funktion) erhält automatisch ein Property `prototype`, dessen
 Wert per Default ein leeres Objekt ist, das wiederum von `Object.prototype`
 abgeleitet ist.
* Man kann dem Prototype eines Konstrukors neue Properties hinzufügen (z.B. Methoden)
 die dann allen mit diesem erzeugten Objekten zur Verfügung stehen:
 `Foo.prototype.myMethod = function() {...}`
* Es ist wichtig das `prototype` Property einer Funktion von dem Prototyp der Funktion
  zu unterscheiden.  Der Prototyp einer Funktion ist immer Function.prototype,
  wohingegen das Property `prototpye` der Funktion an neue Objekte weitergegeben
  wird, die von ihr erzeugt werden.

## Überschreiben von Properties

* Wenn man bei einem Objekt ein Property setzt so überschreibt dessen Wert das gleichnamige
Property in einem Prototype.  Auf diese Art und Weise können also auch Methoden
überschrieben werden.  
* Problem bei Iteration (`for (var property in obj) {...}`) über Properties eines Objekts:
  Es werden auch alle Properties des Prototype durchlaufen. Will man das nicht
   muss man es mit `obj.hasOwnProperty(property)` abfangen.
* Iteriert wird über alle Properties, die das Property `enumerable=true` haben.
 Man kann ein Property also auch "verstecken" mit
 `Object.defineProperty(obj.prototype, 'hidden', {enumerable: false, value: 'foo'} )`

## Objects ohne prototpye

* Will man ein Object ohne prototpye erzeugen (z.B. als einfach Map über deren
  keys man mit for..in iterieren kann), so geht dies mit `var map = Object.create(null)`.

## Getter und Setter

* Mit `get property()` und `set property(new_value)` können für ein Property
 Funktionen definiert werden, die aufgerufen werden, wenn das Property gelesen
 (obj.property) oder gesetzt (obj.property=some_value) wird.
* Mit `Object.defineProperty()`
  lassen sich Getter und Setter nachträglich definieren, indem diese in einem
  Hash als letztes Argument übergeben werden.
* Wenn nur ein Setter definiert ist, so werden Versuche, das Property zu ändern
  einfach ignoriert.

## Vererbung

* Ein Objekt erbt von einem anderen, indem es in seiner Konstruktor-Funktion
  den Konstruktor des anderen Objekts mit `Obj.call(this, ...)` aufruft. Ausserdem
  muss mit `Erbe.prototype = Object.create(Vererber.prototype)` noch der Prototyp
  des anderen Objekts übernommen werden. Danach können Properties des
  Eltern-Objekts überschrieben werden.
