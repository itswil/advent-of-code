import { expect, test } from "bun:test";
import { getUncorruptedMulSum, getUncorruptedMulSumWithDiasbling } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const testInputFile2 = Bun.file(`${PATH}/input-test2.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const testInput2 = await testInputFile2.text();
const input = await inputFile.text();

test("should return the sum of all uncorrupted mul multiplications", () => {
	expect(getUncorruptedMulSum(testInput)).toBe(161);

	console.log("🌟 Answer:", getUncorruptedMulSum(input));
});

test("should return the sum of all uncorrupted mul multiplications with disabling", () => {
	expect(getUncorruptedMulSumWithDiasbling(testInput2)).toBe(48);

	console.log("🌟 Answer:", getUncorruptedMulSumWithDiasbling(input));
});
