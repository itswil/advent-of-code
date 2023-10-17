import { expect, test } from "bun:test";
import { getYesResponseSum, getAllAgreedYesResponseSum } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the sum of 'Yes' responses for all groups", () => {
  expect(getYesResponseSum(testInput)).toBe(11);

  console.log("🌟 Answer:", getYesResponseSum(input));
});

test("should return the sum of all agreed 'Yes' responses for all groups", () => {
  expect(getAllAgreedYesResponseSum(testInput)).toBe(6);

  console.log("🌟 Answer:", getAllAgreedYesResponseSum(input));
});
