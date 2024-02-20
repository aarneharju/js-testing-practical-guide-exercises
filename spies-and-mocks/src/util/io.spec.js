import { it, expect, vi } from "vitest";
import writeData from "./io";
import { promises as fs } from "fs";

vi.mock("fs");

it("should execute the writeFile method", () => {
    const testData = "Test";
    const testFilename = "test.txt";
    writeData(testData, testFilename);

    expect(fs.writeFile).toBeCalled();
    // return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
})