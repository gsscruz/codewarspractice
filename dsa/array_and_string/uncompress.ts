// Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

// <number><char>

// for example, '2c' or '3a'.
// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

const uncompress = (s: string) => {
  const characterMultipliers = filterMultipliers(s);
  const characters = filterCharacters(s);
  const uncompressedString = characterMultipliers
    .map((multiplier, i) => {
      return charRepeater(multiplier, characters[i]);
    })
    .join("");

  function filterMultipliers(charList: string) {
    let listOfCharMultipliers: number[] = [];
    let multiplierBuilder: number[] = [];
    [...charList].map(Number).forEach((digit) => {
      if (!Number.isNaN(digit)) {
        multiplierBuilder.push(digit);
      } else {
        listOfCharMultipliers.push(Number(multiplierBuilder.join("")));
        multiplierBuilder = [];
      }
    });
    return listOfCharMultipliers;
  }
  function filterCharacters(charList: string) {
    const multipliersToString = filterMultipliers(s)
      .map((char) => String(char).split(""))
      .flat();
    const charactersWithoutNumber = [...charList].filter(
      (char) => !multipliersToString.includes(char)
    );
    return charactersWithoutNumber;
  }
  function charRepeater(repeatTimes: number, character: string): string {
    let repeatedCharacters = "";
    for (let i = 0; i < repeatTimes; i++) {
      repeatedCharacters += character;
    }
    return repeatedCharacters;
  }

  return uncompressedString;
};

uncompress("2p1o5p");
