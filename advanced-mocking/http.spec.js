import { it, expect, describe, vi } from "vitest";
import { sendDataRequest } from "./util/http";

const testResponseData = {testKey: "testValue"};

const testFetch = vi.fn((url, options) => {
    return new Promise((resolve, reject) => {
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
})
