// Retry

function MultiplicatorUnitFailure() {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}

function reliableMultiply(a, b) {
  try {
    return primitiveMultiply(a,b);
  } catch (e) {
    if (e instanceof MultiplicatorUnitFailure) {
      return reliableMultiply(a,b);
    }
    else {
      throw e;
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64


// The Locked Box

var box = {
  locked: true,
  unlock: function() { this.locked = false; },
  lock: function() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function withBoxUnlocked(body) {
  var locked = box.locked;
  box.unlock();
  try {
    body.call();
  }
  finally {
    if (locked) {
      box.lock();
    }
  }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true
