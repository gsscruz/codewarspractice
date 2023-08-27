// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

const updateLight = (current) => {
  const lightStates = { green: 'green', yellow: 'yellow', red: 'red' };
  switch (current) {
    case 'green':
      return lightStates.yellow;
      break;
    case 'yellow':
      return lightStates.red;
      break;
    case 'red':
      return lightStates.green;
    default:
      'green';
      break;
  }
};
console.log(updateLight());
