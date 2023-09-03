//You get an array of numbers, return the sum of all of the positives ones.

//Example [1,-4,7,12] => 1 + 7 + 12 = 20

//Note: if there is nothing to sum, the sum is default to 0.


const positiveSum = (arr = 0) => {

  const positiveNumbers = arr.filter(number => number > 0)

  return positiveNumbers.reduce((curr, acc) => curr + acc, 0)
}
