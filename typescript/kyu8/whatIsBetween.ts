// DESCRIPTION:
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

export function between(a: number, b: number): number[] {
  const inBetweens: Array<number> = [];
  while (a <= b) {
    inBetweens.push(a);
    a++;
  }
  return inBetweens;
}
between(1, 5);
