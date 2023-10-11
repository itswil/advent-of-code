import { expect, test } from "bun:test";
import { getFuelRequirementsSum, getFuelRequirementsSumRecursively } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the sum of the fuel requirements", () => {
  expect(getFuelRequirementsSum(testInput)).toBe(2 + 2 + 654 + 33583);

  console.log("🌟 Answer:", getFuelRequirementsSum(input));
});

test("should return the sum of the fuel requirements recursively", () => {
  expect(getFuelRequirementsSumRecursively(testInput)).toBe(
    2 + 2 + 966 + 50346
  );

  console.log("🌟 Answer:", getFuelRequirementsSumRecursively(input));
});
