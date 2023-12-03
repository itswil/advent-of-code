import { expect, test } from "bun:test";
import { getMinimumCubesMultiple, getPossibleGamesIdSum } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the sum of the possible games IDs", () => {
  expect(getPossibleGamesIdSum(testInput)).toBe(8);

  console.log("🌟 Answer:", getPossibleGamesIdSum(input));
});

test("should return the multiple of minimum cubes required", () => {
  expect(getMinimumCubesMultiple(testInput)).toBe(2286);

  console.log("🌟 Answer:", getMinimumCubesMultiple(input));
});
