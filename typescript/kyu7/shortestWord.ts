// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

export function findShort(s: string): number {
  const listOfWords = s.split(" ");
  let shortestWord: number = listOfWords[0].length;
  listOfWords.forEach((word) =>
    word.length < shortestWord ? (shortestWord = word.length) : null
  );
  return shortestWord;
}
