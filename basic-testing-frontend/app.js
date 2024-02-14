import { getNumbersFromForm } from './src/parser.js';
import { calculateResult } from './src/math.js';
import { checkAndFormatResult, outputResultToWebpage } from './src/output.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();
  const numberInputs = getNumbersFromForm(form);

  let result = calculateResult(numberInputs);

  let resultText = checkAndFormatResult(result);

  outputResultToWebpage(resultText);
}

form.addEventListener('submit', formSubmitHandler);