import { it, expect, describe, beforeEach } from "vitest";
import { extractPostData } from "./posts";

    const testTitle = "Test title";
    const testContent = "Test content";
    let testFormData;

describe("extractPostData()", () => {
    beforeEach(() => {
        testFormData = {
            title: testTitle,
            content: testContent,
            get(identifier) {
                return this[identifier];
            }
        }
    })

    it("should extact the title and content from the provided form data", () => {
        const data = extractPostData(testFormData);

        expect(data.title).toBe(testTitle);
        expect(data.content).toBe(testContent);
    })

    it("should throw an error if title is not provided", () => {
        testFormData.title = "";
        
        const data = () => extractPostData(testFormData);

        expect(data).toThrow("A title must be provided.");
    })

    it("should throw an error if content is not provided", () => {
        testFormData.content = "";
        
        const data = () => extractPostData(testFormData);

        expect(data).toThrow("Content must not be empty!");
    })
})