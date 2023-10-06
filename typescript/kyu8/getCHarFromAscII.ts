//  **get character from ASCII Value**

// Write a function which takes a number and returns the corresponding ASCII char for that value.
// Example:

// `65 --> 'A'
// 97 --> 'a'
// 48 --> '0`

export const getChar = (c: number): string => String.fromCharCode(c);
