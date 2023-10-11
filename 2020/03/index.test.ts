import { expect, test } from "bun:test";
import { getNumberOfTrees, getNumberOfTreesFromMaps } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the number of trees encountered", () => {
  expect(getNumberOfTrees(testInput)).toBe(7);

  console.log("🌟 Answer:", getNumberOfTrees(input));
});

test("should return the number of trees encountered from several routes", () => {
  expect(getNumberOfTreesFromMaps(testInput)).toBe(336);

  console.log("🌟 Answer:", getNumberOfTreesFromMaps(input));
});
