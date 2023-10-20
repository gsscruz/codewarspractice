// DESCRIPTION:
// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

interface OddPyramid {
  [key: number]: number;
}
export function rowSumOddNumbers(n: number) {
  let oddPyramid: OddPyramid = {};
  const oddNumbers: number[] = [];
  let chosenRow: number[] = [];

  for (let i: number = 0; i < 9999999; i++) {
    if (i % 2 === 1) {
      oddNumbers.push(i);
    }
  }

  for (let i: number = 1; i <= n; i++) {
    chosenRow = oddNumbers.splice(0, i);
    oddPyramid[i] = chosenRow.reduce((acc, currentVal) => acc + currentVal, 0);
  }

  return oddPyramid[n];
}
rowSumOddNumbers(101);
