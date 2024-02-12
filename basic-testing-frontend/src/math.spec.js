import { it, expect } from "Vitest"; // "it" cculd as well be "test", both work the same
import { add } from "./math";


it("should add together all number values in an array", () => {
    const result = add([1, 2, 3]);
    expect(result).toBe(6);
})