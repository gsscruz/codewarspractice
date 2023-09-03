// DESCRIPTION:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
// function factorial(n, count = 1) {
//   if (n === 0) return count;
//   count *= n;
//   return factorial(n - 1, count);
// }
// console.log(factorial(4));

const grow = (x) => {
  let accumulator = 1;
  x.forEach((arrayElement) => (accumulator *= arrayElement));
  return accumulator;
};
console.log(grow([1, 2, 3]));
