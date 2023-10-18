// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

export function getSum(a: number, b: number): number {
  let sum: number = 0;
  let upperLimit: number;
  let lowerLimit: number;

  if (a > b) {
    upperLimit = a;
    lowerLimit = b;
  } else {
    upperLimit = b;
    lowerLimit = a;
  }

  while (lowerLimit <= upperLimit) {
    sum += lowerLimit;
    lowerLimit++;
  }

  return a === b ? a : sum;
}

getSum(1, 2);
