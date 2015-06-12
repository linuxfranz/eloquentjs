// A Vector Type

function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(v) {
  return new Vector(this.x + v.x, this.y + v.y);
}

Vector.prototype.minus = function(v) {
  return new Vector(this.x - v.x, this.y - v.y);
}

Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
})

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5

// Another Cell
function repeat(string, times) {
  var result = "";
  for (var i = 0; i < times; i++)
    result += string;
  return result;
}

function TextCell(text) {
  this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
  return this.text.reduce(function(width, line) {
    return Math.max(width, line.length);
  }, 0);
};
TextCell.prototype.minHeight = function() {
  return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
  var result = [];
  for (var i = 0; i < height; i++) {
    var line = this.text[i] || "";
    result.push(line + repeat(" ", width - line.length));
  }
  return result;
};

function StretchCell(inner, width, height) {
  this.inner = inner;
  this.with = width;
  this.height = height;
}

StretchCell.prototype.minWidth = function() {
  var minWidth = this.inner.minWidth();
  if (minWidth < this.width) {
    minWidth = this.width;
  }
  return minWidth;
}

StretchCell.prototype.minHeight = function() {
  var minHeight = this.inner.minHeight();
  if (minHeight < this.height) {
    minHeight = this.height;
  }
  return minHeight;
}

StretchCell.prototype.draw = function(width, height) {
  return this.inner.draw(width, height);
}

var sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
// → 3
console.log(sc.minHeight());
// → 2
console.log(sc.draw(3, 2));
// → ["abc", "   "]


//
