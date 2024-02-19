import { it, expect, describe, afterAll, vi } from "vitest";
import { validateStringNotEmpty, validateNumber, validateInput, validateAllInputs } from "./validation";

describe("validateStringNotEmpty()", () => {
    describe("You can also nest describe blocks inside each other like this", () => {
        it("should throw an error if input is an empty string", () => {
            const input = "";
            
            const testFunction = () => {
                validateStringNotEmpty(input);
            }
        
            expect(testFunction).toThrow(/Invalid input - must not be empty./);
        })
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

    it("should throw an error if input is anythin other than a string", () => {
        const inputNumber = 4;
        const inputObject = {};
        const inputBoolean = true;

        const testFunctionForNumber = () => validateStringNotEmpty(inputNumber);
        const testFunctionForObject = () => validateStringNotEmpty(inputObject);
        const testFunctionForBoolean = () => validateStringNotEmpty(inputBoolean);

        expect(testFunctionForNumber).toThrow();
        expect(testFunctionForObject).toThrow();
        expect(testFunctionForBoolean).toThrow();
    })
})

describe("validateNumber()", () => {
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
})

describe("validateAllInputs()", () => {
    it("should return the same array that is given as input in string format, but converted to number format", () => {
        const input = ['1', '2'];

        const result = validateAllInputs(input);

        expect(result[0]).toBeTypeOf("number");
        expect(result).toEqual([1, 2]);
    })
})

describe('should mock console.log', () => {
    const consoleMock = vi.spyOn(console, 'log').mockImplementation(() => undefined);
    // const consoleSpy = vi.spyOn(console, 'log');
  
    afterAll(() => {
      consoleMock.mockReset();
    });
  
    it('should log `sample output`', () => {
      console.log('sample output');
      expect(consoleMock).toHaveBeenCalledOnce();
      expect(consoleMock).toHaveBeenLastCalledWith('sample output');
    });
});