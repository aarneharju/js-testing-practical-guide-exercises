import { transformToNumber } from './numbers.js';

export function validateStringNotEmpty(value) {
  if (value.trim().length === 0) {
    throw new Error('Invalid input - must not be empty.');
  }
}

export function validateNumber(number) {
      if (isNaN(number) || typeof(number) !== "number") {
    throw new Error('Invalid number input.');
  }
}

export function validateInput(numberInput) {
  validateStringNotEmpty(numberInput);
  const number = transformToNumber(numberInput);
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
