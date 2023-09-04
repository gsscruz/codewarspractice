// Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string, the longest possible,
// containing distinct letters
// - each taken only once -
// coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
const longest = (s1, s2) => {
  const unifiedStrings = s1 + s2;
  const getLettersOnly = (text) => text.match(/[A-Za-z]/g).join('');
  const lettersOnly = getLettersOnly(unifiedStrings);
  const letterValue = (letter) => letter.charCodeAt();
  const lettersIntoNumbers = [...lettersOnly]
    .map((letter) => letter.charCodeAt())
    .sort((x, y) => x - y);

  const numbersIntoLetters = lettersIntoNumbers.map((number) =>
    String.fromCharCode(number)
  );

  const uniqueLetters = new Set();
  numbersIntoLetters.forEach((letter) => uniqueLetters.add(letter));
  return [...uniqueLetters].join('');
};
const a = 'xyaabbbccccde123123fww';
const b = 'xxxxyyyyabk1111_$lmopq';
console.log(longest(a, b));
