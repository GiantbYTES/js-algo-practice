/*
What's the Missing Letter?
Given a string of letters in the English alphabet, return the letter that's missing from the string. The missing letter will make the string be in alphabetical order (from A to Z).

If there are no missing letters in the string, return "No Missing Letter".

Examples
missingLetter("abdefg") ➞ "c"

missingLetter("mnopqs") ➞ "r"

missingLetter("tuvxyz") ➞ "w"

missingLetter("ghijklmno") ➞ "No Missing Letter"
Notes
The given string will never have more than one missing letter.
*/

function missingLetter(str) {
  //your code
  const strArr = str.split("");
  console.log(strArr);
  for (let i = 0; i < strArr.length - 1; i++) {
    if (strArr[i + 1].charCodeAt(0) - strArr[i].charCodeAt(0) !== 1) {
      return String.fromCharCode(strArr[i].charCodeAt(0) + 1);
    }
  }
  return "No Missing Letter";
}

exports.solution = missingLetter;
