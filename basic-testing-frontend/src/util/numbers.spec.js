import { it, expect, describe } from "vitest";
import { transformToNumber } from "./numbers";

describe("transformToNumber()", () => {
    it("should return a number if a string that can be converted to a number was given as input", () => {
        const input = "2";
    
        const result = transformToNumber(input);
    
        expect(result).toBeTypeOf("number");
        expect(result).toBe(2);
    })
    
    it("should return NaN if a string that can't be converted to a number was given as input", () => {
        const input = "invalid input string";
    
        const result = transformToNumber(input);
        
        expect(result).toBeNaN();
    })
    
    it("should return NaN if input is empty (undefined)", () => {
        // const input = undefined; <- this could be used as input too
        
        const result = transformToNumber();
        
        expect(result).toBeNaN;
    })
    
    it("should return Infinitxy if string 'Infinity' was given as input", () => {
        const input = "Infinity";
    
        const result = transformToNumber(input);
        
        expect(result).toBe(Infinity);
    })
    
    it("should return NaN if an array was given as input", () => {
        const input = [1, 3];
    
        const result = transformToNumber(input);
    
        expect(result).toBeNaN();
    })
    
})
