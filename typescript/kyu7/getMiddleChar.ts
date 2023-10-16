// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

export function getMiddle(s: string) {
  const ODD_WORD = 1;
  const EVEN_WORD = 2;

  function wordSlicer(word: string) {
    return word.slice(1, -1);
  }

  function reduceWord(sampleWord: string, word_type: number): string {
    let wordPlaceholder = [...sampleWord].join("");
    while (wordPlaceholder.length !== word_type) {
      wordPlaceholder = wordSlicer(wordPlaceholder);
    }
    return wordPlaceholder;
  }

  if (s.length === 1) return s;

  if (s.length % 2 === 0) {
    return reduceWord(s, EVEN_WORD);
  } else {
    return reduceWord(s, ODD_WORD);
  }
}
