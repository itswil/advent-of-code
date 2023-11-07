import { expect, test } from "bun:test";
import { getPowerConsumption, getLifeSupportRating } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the submarine power consumption", () => {
  expect(getPowerConsumption(testInput)).toBe(198);

  console.log("🌟 Answer:", getPowerConsumption(input));
});

test("should return the submarine life support rating", () => {
  expect(getLifeSupportRating(testInput)).toBe(230);

  console.log("🌟 Answer:", getLifeSupportRating(input));
});
