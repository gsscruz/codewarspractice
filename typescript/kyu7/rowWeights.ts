// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27

export function rowWeights(arr: number[]) {
  let team1Weight: number[] = [];
  let team2Weight: number[] = [];

  arr.forEach((_, index) => {
    index % 2 === 0
      ? team1Weight.push(arr[index])
      : team2Weight.push(arr[index]);
  });

  const team1TotalWeigth: number = team1Weight.reduce(
    (acc, val) => acc + val,
    0
  );
  const team2TotalWeight: number = team2Weight.reduce(
    (acc, val) => acc + val,
    0
  );

  return [team1TotalWeigth, team2TotalWeight] as const;
}

rowWeights([13, 27, 49]); //  ==>  return (62, 27)
