import { it, expect } from "Vitest"; // "it" cculd as well be "test", both work the same
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