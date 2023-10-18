// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

export function accum(s: string) {
  const splitString = [...s];

  const multiplyAndTransformLetter = (char: string, multiplier: number) => {
    let letters: string = "";
    for (let i = 0; i <= multiplier; i++) {
      letters += char.toLowerCase();
    }
    const result = letters[0].toUpperCase() + letters.slice(1);
    return result;
  };

  const multipliedLetters = [...s].map((letter: string, index: number) =>
    multiplyAndTransformLetter(letter, index)
  );

  return multipliedLetters.join("-");
}
accum("abcd");
