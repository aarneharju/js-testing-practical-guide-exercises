import { it, expect } from "Vitest";
import { validateStringNotEmpty, validateNumber } from "./validation";

it("should throw an error if input is an empty string", () => {
    const input = "";
    
    const testFunction = () => {
        validateStringNotEmpty(input);
    }

    expect(testFunction).toThrow(/Invalid input - must not be empty./);
})

it("should not throw an error if input string is not empty", () => {
    const input = "not an empty string"
    
    const testFunction = () => {
        validateStringNotEmpty(input);
    }

    expect(testFunction).not.toThrow(/Invalid input - must not be empty./);
})

it("should throw an error if input is just spaces because they get trimmed out", () => {
    const input = "          ";
    
    const testFunction = () => {
        validateStringNotEmpty(input);
    }

    expect(testFunction).toThrow(/Invalid input - must not be empty./);
})

it("should throw an error if input is not a number", () => {
    const input = {}; // note: empty array [] is undefined in javascript and will not pass if used here
    
    const testFunction = () => {
        validateNumber(input);
    }

    expect(testFunction).toThrow(/Invalid number input./);
})

it("should not throw an error if input is a number", () => {
    const input = 4;

    const testFunction = () => {
        validateNumber(input);
    }

    expect(testFunction).not.toThrow(/Invalid number input./);
})

it("should throw an error if input is a string", () => {
    const input = "2"

    const testFunction = () => {
        validateNumber(input);
    }

    expect(testFunction).toThrow(/Invalid number input./)
})
