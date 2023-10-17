// length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]

export const evenNumbers = (array: number[], n: number): number[] =>
  [...array].filter((number) => number % 2 === 0).slice(-n);
