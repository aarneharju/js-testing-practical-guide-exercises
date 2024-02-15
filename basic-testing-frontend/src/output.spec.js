import { it, expect, describe } from "vitest";
import { checkAndFormatResult } from "./output";

describe("checkAndFormatResult()", () => {
    it("should return 'Result: ' followed with the valid input number", () => {
        const input = 3;
    
        const result = checkAndFormatResult(input);
    
        expect(result).toBe("Result: 3");
    })

    it("should return a message indicating invalid input if the input is 'invalid'", () => {
        const input = "invalid";

        const result = checkAndFormatResult(input);

        expect(result).toContain("Invalid input")
    })

    it("should return an empty string if input is 'no-calc'", () => {
        const input = "no-calc";

        const result = checkAndFormatResult(input);

        expect(result).toBe("");
    })
})
