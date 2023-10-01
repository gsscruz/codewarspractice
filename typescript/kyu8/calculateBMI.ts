// Calculate BMI

// DESCRIPTION:
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

export function bmi(weight: number, height: number): string {
  // TODO: implement this method

  const calculateBmi = weight / height ** 2;

  if (calculateBmi <= 18.5) {
    return "Underweight";
  } else if (calculateBmi <= 25) {
    return "Normal";
  } else if (calculateBmi <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}
