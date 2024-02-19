import { it, expect, describe, test } from "vitest";

import { generateToken, generateTokenPromise } from "./async-example";

describe("generateToken()", () => {
    it("should generate a token value", (done) => { // without the done -function the function inside generateToken() never gets evaluated and the test will always pass becase an assertion will never get made
        const testUserEmail = "test@test.com";

        generateToken(testUserEmail, (err,token) => {
            // When using the done -function, the error won't be picked up by the test runner but, it needs to be handled with a try-catch
            try {
                expect(token).toBeDefined();
                done();
                // expect(token).toBe("invalid value this should fail")
            } catch (err) {
                done(err);
            }
        })
    })
})

describe("generateTokenPromise()", () => {
    it("should return a token from promise", () => {
        const testUserEmail = "test@test.com";
    
        return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined(); // You should return the promise assertion here, because it guarantees that Vitest / Jest waits for the promise to be resolved
    })

    it("should return a token from async await", async () => {
        const testUserEmail = "test@test.com"

        const token = await generateTokenPromise(testUserEmail); // You don't need to return when using async / await (since a function annotated with async returns a promise implicitly)

        expect(token).toBeDefined();
    })
})