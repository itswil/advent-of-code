import { expect, test } from "bun:test";
import { getNumberOfIncrements, getNumberOfSumIncrements } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the number of increments", () => {
  expect(getNumberOfIncrements(testInput)).toBe(7);

  console.log("🌟 Answer:", getNumberOfIncrements(input));
});

test("should return the number of larger sums than the previous", () => {
  expect(getNumberOfSumIncrements(testInput)).toBe(5);

  console.log("🌟 Answer:", getNumberOfSumIncrements(input));
});
