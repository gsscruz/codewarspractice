// Your task in this kata is to implement a function that calculates the sum of the integers inside a string.
// For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

function sumOfIntegersInString(string) {
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
  let sum = 0;
  for (const key in treeNumber) {
    sum += Number(treeNumber[key]);
  }

  return sum;
}
console.log(sumOfIntegersInString("a30a90"));
