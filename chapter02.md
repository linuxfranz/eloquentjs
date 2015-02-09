# Chapter02 - Interessantes

* Schnell Javascript im Browser ausprobieren: (getestet unter Chrome) F-12 drücken und es öffnet sich die Javascript-Konsole
* Debugging-Ausgaben:
 * Entweder herkömmlich über alert() et. al. 
 * oder console.log(), letzteres landet auf der Javascript-Konsole
* Besondere Werte in Javascript sind: NaN (Not a Number) und Infinity (Unendlich)
 * NaN wird geliefert, wenn das Ergebnis eines Ausrucks numerisch erwartet wird, aber nicht darstellbar ist, z. B.: "fünf" * 2
 * Inifinity wird geliefert z.B. bei Division mit 0
 * alle Ausrücke, die NaN enthalten liefern NaN als Ergebnis! (und NaN == NaN = false!)
* Undefined und null
* Boolean alles ausser false, "", 0 ist true!
* Vorsicht mit der automatischen Typumwandlung! 
 * 8 * null = 0
 * "5" - 1 = 6
 * aber: "5" + 1 = 51
* Für Vergleiche ohne automat. Typumwandlung verwendet man === und ==!
* "Logischer Kurzschluss" für Defaultwerte: var name = myName || "noname"; // Defaultwert wenn myName undefined
 * Aber Vorsicht: 0 || 10 = 0, da 0 == false!!

