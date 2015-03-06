// Minimum function
function min(a, b) {
    return a <= b ? a : b;
}

// Recursion
// Beware of negative n! It gives a stack overflow.
function isEven(n) {
    if (n == 0) {
        return true;
    }
    else if (n == 1) {
        return false;
    }
    else {
        return isEven(n - 2);
    }
}

// Bean Counting
function countBsOld(s) {
    var count = 0;
    for (i = 0; i < s.length; i++) {
        if (s.charAt(i) == 'B') count++;
    }
    return count;
}

function countChar(s, c) {
    var count = 0;
    for (i = 0; i < s.length; i++) {
        if (s.charAt(i) == c) count++;
    }
    return count;
}

function countBs(s) {
    return countChar(s, 'B');
}

