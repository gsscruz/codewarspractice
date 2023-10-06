// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

export function noBoringZeros(n: number): number {
  const numbersToStrings: Array<string> = [...n.toString()];

  for (let i = numbersToStrings.length - 1; i > 0; i--) {
    if (numbersToStrings[i] === "0") {
      numbersToStrings.pop();
    } else {
      break;
    }
  }

  return Number(numbersToStrings.join(""));
}
noBoringZeros(105);
