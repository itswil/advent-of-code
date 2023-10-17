import { expect, test } from "bun:test";
import { getLeastFuelRequired, getLeastFuelRequiredV2 } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the least amount of fuel required", () => {
  expect(getLeastFuelRequired(testInput)).toBe(37);

  console.log("🌟 Answer:", getLeastFuelRequired(input));
});

test("should return the least amount of fuel required with new fuel requirement", () => {
  expect(getLeastFuelRequiredV2(testInput)).toBe(168);

  console.log("🌟 Answer:", getLeastFuelRequiredV2(input));
});
