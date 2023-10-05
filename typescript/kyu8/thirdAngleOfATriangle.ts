// ### Third angle of a triangle
// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.

const FULL_TRIANGLE: number = 180;
export const otherAngle = (a: number, b: number): number =>
  FULL_TRIANGLE - a - b;
