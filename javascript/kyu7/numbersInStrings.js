// In this Kata, you will be given a string that has lowercase letters and numbers.
// Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// Good luck!
function solve(string) {
  let treeNumber = {};
  let treeBranch = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i].charCodeAt() >= 48 && string[i].charCodeAt() <= 57) {
      if (treeNumber[treeBranch] === undefined) treeNumber[treeBranch] = "";
      treeNumber[treeBranch] += string[i];
    } else {
      treeBranch++;
    }
  }
  let higherValue = 0;
  for (const key in treeNumber) {
    if (Number(treeNumber[key]) > higherValue)
      higherValue = Number(treeNumber[key]);
  }
  return higherValue;
}

solve("gh12cdy695m1");
