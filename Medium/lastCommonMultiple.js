/*
Write a function that returns the least common multiple (LCM) of two integers.

Examples
lcm(9, 18) ➞ 18

lcm(8, 5) ➞ 40

lcm(17, 11) ➞ 187
Notes
Both values will be positive.
The LCM is the smallest integer that divides both numbers such that the remainder is zero.
*/

function lastCommonMultiple(a, b) {
  //your code
  if (b % a === 0) {
    return b;
  }
  if (a % b === 0) {
    return a;
  } else {
    for (let i = a; i <= a * b; i += a) {
      if (i % b === 0) {
        return i;
      }
    }
  }
}

exports.solution = lastCommonMultiple;
