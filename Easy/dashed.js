/*
Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

Examples

dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"

dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
Notes
A string can contain uppercase and lowercase vowels.
*/

function dashed(str) {
  //your code
  let toReturn = "";
  for (let i = 0; i < str.length; i++) {
    let l = str.charAt(i);
    if (
      l === "a" ||
      l === "e" ||
      l === "i" ||
      l === "o" ||
      l === "u" ||
      l === "A" ||
      l === "E" ||
      l === "I" ||
      l === "O" ||
      l === "U"
    ) {
      toReturn = toReturn + "-" + l + "-";
    } else {
      toReturn = toReturn + l;
    }
  }
  console.log(toReturn);
  return toReturn;
}

exports.solution = dashed;
