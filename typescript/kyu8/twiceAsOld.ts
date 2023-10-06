// ### Twitce as old

// Your function takes two arguments:
// 1 current father's age (years)
// 2 current age of his son (years)

// ⠀Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

export function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
  const sonsTwiceAge = sonYearsOld * 2;
  let years = 0;
  if (dadYearsOld > sonsTwiceAge) {
    years = dadYearsOld - sonsTwiceAge;
    return years;
  }

  years = sonsTwiceAge - dadYearsOld;
  return years;
}

twiceAsOld(20, 10);
