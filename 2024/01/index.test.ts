import { expect, test } from "bun:test";
import { getSumOfDifferences, getSumOfSimilarityScores } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the sum of the differences between the ordered number lists", () => {
	expect(getSumOfDifferences(testInput)).toBe(11);

	console.log("🌟 Answer:", getSumOfDifferences(input));
});

test("should return the sum of the Similarity Scores between the ordered number lists", () => {
	expect(getSumOfSimilarityScores(testInput)).toBe(31);

	console.log("🌟 Answer:", getSumOfSimilarityScores(input));
});
