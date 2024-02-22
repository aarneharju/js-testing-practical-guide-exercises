import { it, expect, describe, vi } from "vitest";
import { sendDataRequest } from "./util/http";
import { HttpError } from "./util/errors";

const testResponseData = {testKey: "testValue"};

const testFetch = vi.fn((url, options) => {
    return new Promise((resolve, reject) => {
        if (typeof options.body != "string") {
            reject("Not a string.");
        }
        const testResponse = {
            ok: true,
            json() {
                return new Promise((resolve, reject) => {
                    resolve(testResponseData);
                })
            }
        }
        resolve(testResponse);
    })
})

vi.stubGlobal("fetch", testFetch);

describe("sendDataRequest()", () => {
    it("should return any available response data", () => {
        const testData = { key: "test" };

        return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
    })

    it("should convert the provided data to JSON before sending the request", async () => {
        const testData = { key: "test" };

        let errorMessage;

        try {
            await sendDataRequest(testData);
        } catch (error) {
            errorMessage = error;
        }

        expect(errorMessage).not.toBe("Not a string.");
    })

    it("should throw an HttpError in case of non-ok responses", () => {
        const testData = { key: "test" }; 

        testFetch.mockImplementationOnce((url, options) => {
            return new Promise((resolve, reject) => {
                const testResponse = {
                    ok: false,
                    json() {
                        return new Promise((resolve, reject) => {
                            resolve(testResponseData);
                        })
                    }
                }
                resolve(testResponse);
            })
        })

        return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
    })
})
