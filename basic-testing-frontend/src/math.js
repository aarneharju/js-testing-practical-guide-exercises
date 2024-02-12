export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    sum += +number; // Plus (+) in front of a variable returns the numeric representation of the object = forces it to have a numeric value if possible
  }
  return sum;
}
