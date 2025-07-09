/*
Write a function that returns true if you can partition an array into one element and the rest, such that this element is equal to the product of all other elements excluding itself.

Examples
canPartition([2, 8, 4, 1]) ➞ true
// 8 = 2 x 4 x 1

canPartition([-1, -10, 1, -2, 20]) ➞ false

canPartition([-1, -20, 5, -1, -2, 2]) ➞ true
Notes
The array may contain duplicates.
Multiple solutions can exist, any solution is sufficient to return true.
*/

function canPartition(arr) {
  //your code
  let numOfNeg = 0;
  let sumToCheck = 1;
  let tmp = arr.filter((n) => n === 0);
  if (tmp.length > 0) {
    if (tmp.length > 1) {
      return true;
    } else {
      return false;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) numOfNeg++;
  }
  if (numOfNeg % 2 !== 0 && numOfNeg > 0) {
    return false;
  } else if (numOfNeg > 0) {
    let minVal = Math.min(...arr);
    let idx = arr.findIndex((min) => min === minVal);
    arr.splice(idx, 1);
    for (let i = 0; i < arr.length; i++) {
      sumToCheck = sumToCheck * arr[i];
    }
    if (sumToCheck === minVal) {
      return true;
    } else {
      return false;
    }
  } else {
    let maxVal = Math.max(...arr);
    let idx = arr.findIndex((max) => max === maxVal);
    arr.splice(idx, 1);
    for (let i = 0; i < arr.length; i++) {
      sumToCheck = sumToCheck * arr[i];
    }
    if (sumToCheck === maxVal) {
      return true;
    } else {
      return false;
    }
  }
}

exports.solution = canPartition;
