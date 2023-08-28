// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// const findAvg = (numArray) => {
//   let elementInHand = numArray.pop();
//   let remainingArr = numArray;
//   if (remainingArr.length === 0) return;
// let sum =0
//   return numArray.length  findAvg(remainingArr);
// };
function findAverage(array) {
  if (array.length === 0) return 0;
  let sum = 0;
  array.forEach((currentElement) => {
    sum += currentElement;
  });
  return sum / array.length;
}
