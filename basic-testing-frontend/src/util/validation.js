import { transformToNumber } from './numbers.js';

export function validateStringNotEmpty(input) {
  if (input.trim().length === 0) {
    throw new Error('Invalid input - must not be empty.');
  }
}

export function validateNumber(number) {
      if (isNaN(number) || typeof(number) !== "number") {
    throw new Error('Invalid number input.');
  }
}

export function validateInput(input) {
  validateStringNotEmpty(input);
  const number = transformToNumber(input);
  validateNumber(number);
  return number;
}

export function validateAllInputs(numberInputs) {
  const numbers = [];
  for (const numberInput of numberInputs) {
    const validatedNumber = validateInput(numberInput);
    numbers.push(validatedNumber);
  }
  return numbers;
}
