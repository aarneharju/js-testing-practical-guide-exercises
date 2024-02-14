import { it, expect } from "vitest"; // "it" could as well be "test", both work the same
import { add } from "./math";


it("should add together all number values in an array", () => {
    // Arrange
    const numbers = [1, 2];
    
    // Act
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce((total, currentNumber) => currentNumber + total, 0);
    expect(result).toBe(expectedResult);
})

it("should yield NaN if at least one of the numbers is invalid", () => {
    const numbers = ["invalid", 1];
    
    const result = add(numbers);

    expect(result).toBeNaN();
})

it("should yield a correct sum if an array of numeric string values is provided", () => {
    const numbers = ["1", "2"];

    const result = add(numbers);

    const expectedResult = numbers.reduce((total, currentNumber) => currentNumber + total, 0);
})

it("should yield 0 if an empty array is provided as input", () => {
    const numbers = [];

    const result = add(numbers);

    expect(result).toBe(0);
})

it("should throw an error if no value is passed to the function", () => {
    // We could use try - catch here but the way below is a bit simpler
    const resultFunction = () => {
        add(); // Because the add() function is inside the resultFunction, it isn't called immediately and therefore doesn't yet throw an error
    }
    expect(resultFunction).toThrow(/is not iterable/); // We call the add() -function here and expect it to throw an error and capture it then 
})

// The add() function was designed to take arrays as input, not several numbers
it("should throw an error if provided with multiple arguments instead of an array", () => {
    const num1 = 1;
    const num2 = 2;

    const resultFunction = () => {
        add(num1, num2);
    }

    expect(resultFunction).toThrow(/is not iterable/);
})