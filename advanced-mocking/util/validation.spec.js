import { it, expect, describe, beforeAll, beforeEach } from "vitest";
import { validateNotEmpty } from "./validation";

const errorMessage = "";

beforeAll(() => {
    const errorMessage = "Error message";
})

describe("validateNotEmpty()", () => {
    it("should not throw an error if the input is not empty", () => {
        const input = "input text";
        const testFunction = () => validateNotEmpty(input, errorMessage);
        expect(testFunction).not.toThrow(errorMessage);
    })

    it("should throw an error if the input is empty", () => {
        const input = "";
        const testFunction = () => validateNotEmpty(input, errorMessage);
        expect(testFunction).toThrow(errorMessage);
    })

    it("should throw an error if input is only spaces", () => {
        const input = "          ";
        const testFunction = () => validateNotEmpty(input, errorMessage);
        expect(testFunction).toThrow(errorMessage);
    })
})