import { it, expect, describe } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("HttpError()", () => {
    it("should create a class instance of HttpError when called with statusCode, message and data parameters", () => {
        const statusCodeInput = "201";
        const messageInput = "Http error message";
        const dataInput = "Data";

        const httpErrorInstance = new HttpError(statusCodeInput, messageInput, dataInput);

        expect(httpErrorInstance).toBeDefined();
        expect(httpErrorInstance.statusCode).toEqual(statusCodeInput);
        expect(httpErrorInstance.message).toEqual(messageInput);
        expect(httpErrorInstance.data).toEqual(dataInput);
    })
})

describe("ValidationError()", () => {
    it("should create a class instance of ValidationError when called with error message parameter", () => {
        const inputMessage = "Error message";

        const validationErrorInstance = new ValidationError(inputMessage);

        expect(validationErrorInstance).toBeDefined();
        expect(validationErrorInstance.message).toBe(inputMessage);
    })
})