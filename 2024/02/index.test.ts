import { expect, test } from "bun:test";
import {
	getNumberOfSafeReports,
	getNumberOfSafeReportsWithTolerance,
	isSafeReport,
	isSafeReportWithTolerance,
} from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return whether a report is safe or not", () => {
	expect(isSafeReport("7 6 4 2 1")).toBe(true);
	expect(isSafeReport("1 2 7 8 9")).toBe(false);
	expect(isSafeReport("9 7 6 2 1")).toBe(false);
	expect(isSafeReport("1 3 2 4 5")).toBe(false);
	expect(isSafeReport("8 6 4 4 1")).toBe(false);
	expect(isSafeReport("1 3 6 7 9")).toBe(true);
});

test("should return the number of safe reports", () => {
	expect(getNumberOfSafeReports(testInput)).toBe(2);

	console.log("🌟 Answer:", getNumberOfSafeReports(input));
});

test("should return whether a report is safe or not with tolerance", () => {
	expect(isSafeReportWithTolerance("7 6 4 2 1")).toBe(true);
	expect(isSafeReportWithTolerance("1 2 7 8 9")).toBe(false);
	expect(isSafeReportWithTolerance("9 7 6 2 1")).toBe(false);
	expect(isSafeReportWithTolerance("1 3 2 4 5")).toBe(true);
	expect(isSafeReportWithTolerance("8 6 4 4 1")).toBe(true);
	expect(isSafeReportWithTolerance("1 3 6 7 9")).toBe(true);
});

test("should return the number of safe reports with tolerance", () => {
	expect(getNumberOfSafeReportsWithTolerance(testInput)).toBe(4);

	console.log("🌟 Answer:", getNumberOfSafeReportsWithTolerance(input));
});
