import { it, expect, vi, describe } from "vitest";
import { generateReportData } from "./data";

describe("generateReportData()", () => {
    it("should execute logging function if it is provided", () => {
        const logger = vi.fn();
        // logger.mockImplementationOnce(() => {});
        generateReportData(logger);
        expect(logger).toBeCalled();
    })
})