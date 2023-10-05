// Output
// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// // P.S. Each array includes only integer numbers. Output is a number too.

type ArrayOfNumbers = Array<number>;

export const arrayPlusArray = (
  arr1: ArrayOfNumbers,
  arr2: ArrayOfNumbers
): number => {
  let total = 0;

  const numberList: ArrayOfNumbers = arr1.concat(arr2);

  numberList.forEach((number) => (total += number));

  return total;
};
