import { it, expect, describe, vi, beforeEach } from "vitest";
import fs from "fs";
import path from "path";
import { Window } from "happy-dom";
import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
let htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
vi.stubGlobal("document", document);

describe("showError()", () => {
    beforeEach(() => {
        document.body.innerHTML = ""; // document.write appends so the document content needs to be reset to empty first
        document.write(htmlDocumentContent);
    })

    it("should add an error paragraph to the id='errors' element", () => {
        const testMessage = "Error message";

        showError(testMessage);

        const errorMessageElement = document.querySelector("#errors > p");

        expect(errorMessageElement.innerHTML).toBe(testMessage);
    })

    it("should not contain an error paragraph initially", () => {
        const errorContainerElement = document.querySelector("#errors");
        console.log(errorContainerElement.outerHTML);

        expect(errorContainerElement.childElementCount).toBe(0);
    })
})