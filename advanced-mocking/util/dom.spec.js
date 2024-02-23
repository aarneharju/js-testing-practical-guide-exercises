import { it, expect, describe, vi } from "vitest";
import fs from "fs";
import path from "path";
import { Window } from "happy-dom";
import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);
vi.stubGlobal("document", document);

describe("showError()", () => {
    it("should show error message on the webpage", () => {
        const testMessage = "Error message";

        showError(testMessage);
    })
})