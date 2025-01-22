import { expect, test } from "bun:test";
import { getNumberOfOccurences, getNumberOfOccurences2 } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the number of XMAS occurences", () => {
	expect(getNumberOfOccurences(testInput)).toBe(18);

	console.log("🌟 Answer:", getNumberOfOccurences(input));
});

test("should return the number of MAS-crossed occurences", () => {
	expect(getNumberOfOccurences2(testInput)).toBe(9);

	console.log("🌟 Answer:", getNumberOfOccurences2(input));
});
