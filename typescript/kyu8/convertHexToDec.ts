// Complete the function which converts hex number (given as a string) to a decimal number.

export function hexToDec(hexString: string): number {
  type HexVal = {
    [key: string]: number;
    0: number;
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
    9: number;
    a: number;
    b: number;
    c: number;
    d: number;
    e: number;
    f: number;
  };
  const HEX_VALUES: HexVal = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };
  const HEX_MULTIPLIER: number = 16;

  const sanitizedString: Array<string> = [...hexString].map((letter) =>
    letter.toLocaleLowerCase()
  );

  const signal = () => {
    if (hexString[0] === "-") {
      return "-";
    } else {
      return;
    }
  };

  const replaceHexValuesForDecimals = (letter: string): number =>
    HEX_VALUES[letter];

  const hexDecimalSequence: Array<number> | undefined = signal()
    ? sanitizedString
        .slice(1)
        .map((letter) => replaceHexValuesForDecimals(letter))
    : sanitizedString.map((letter) => replaceHexValuesForDecimals(letter));

  let totalSum: number = 0;

  for (let i = 0; i < hexDecimalSequence.length; i++) {
    const hexToDecimal =
      hexDecimalSequence[hexDecimalSequence.length - 1 - i] *
      HEX_MULTIPLIER ** i;
    totalSum += hexToDecimal;
  }

  if (signal() !== undefined) {
    return parseInt(signal()! + totalSum);
  } else {
    return totalSum;
  }
}
hexToDec("-CC");
