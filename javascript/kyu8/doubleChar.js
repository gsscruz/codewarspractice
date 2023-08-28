// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

const doubleChar = (str) => [...str].map((char) => char + char).join('');

// const doubleChar = (str) => {
//  let result = [];
//   for (let i = 0; i < str.length; i++) {
//     result.push(str[i] + str[i])
//   }
//   return result.join('');
// };

doubleChar('abc');
