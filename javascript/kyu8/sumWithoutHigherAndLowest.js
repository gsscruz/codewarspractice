// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
function sumArray(array) {
  if (typeof array === 'string') return 0;
  if (typeof array === 'number') return 0;
  if (array === null) return 0;
  if (array === []) return 0;
  if (array === 'undefined') return 0;
  if (array === undefined) return 0;

  let highestVal = array[0];
  let lowestVal = array[0];

  array.forEach((number) => {
    if (number < lowestVal) lowestVal = number;
  });

  array.forEach((number) => {
    if (number > highestVal) highestVal = number;
  });

  const highestValIndex = array.indexOf(highestVal);
  array.splice(highestValIndex, 1);

  const arrayWithoutHighest = array;

  const lowestValIndex = arrayWithoutHighest.indexOf(lowestVal);

  arrayWithoutHighest.splice(lowestValIndex, 1);

  const arrayWithoutLowestAndHighest = array;
  console.log(arrayWithoutLowestAndHighest);
  if (arrayWithoutLowestAndHighest.length === 0) {
    return 0;
  }
  const sumOfFilteredArray = arrayWithoutLowestAndHighest.reduce(
    (curr, acc) => curr + acc
  );

  return sumOfFilteredArray;
}

sumArray([5, 5, 3]);
