// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

export function capitals(word: string): number[] {
  // Write your code here
  // return [] as number[];

  //output: lista ordenada de index das letras uppercase

  //1st - ordenar lista
  function sortArrayWithIndexes(sampleArray: number[]): number[] {
    return [...sampleArray].sort((a, b) => a - b);
  }

  //2nd - pegar index das letras uppercase
  //2.1 -helper pra checar se a letra eh uppercase
  function isLetterUppercased(letter: string): boolean {
    return letter === letter.toUpperCase() ? true : false;
  }

  //2.2 - mapeia array do input
  function loopInputWord(word: string): number[] {
    return [...word]
      .map((letter) =>
        isLetterUppercased(letter) ? [...word].indexOf(letter) : null
      )
      .filter((value) => value !== null) as number[];
  }

  return sortArrayWithIndexes(loopInputWord(word));
}

capitals("CodEWaRs");
