// Exercises

// triangle
var line = "#";
while (line.length <= 7) {
  console.log(line);
  line += "#";
}

// fizzbuzz
for (var n = 1; n <= 100; n++) {
  var out = "";
  if (n % 3 == 0) {
    out += "Fizz";
  }
  if(n % 5 == 0) {
    out += "Buzz";
  }
  if (out.length == 0) {
    out = n;
  }
  console.log(out);
}

// chessboard
var size = 20;
for (var y = 1; y <= size; y++) {
  var line = "";
  var oddChar = " ";
  var evenChar = "#";
  if (y % 2 == 0) {
    oddChar = "#";
    evenChar = " ";
  }
  for (var x = 1; x <= size; x++) {
      if (x % 2 == 0) {
        line += evenChar;
      }
      else {
        line += oddChar;
      }
    }
  console.log(line);
}
