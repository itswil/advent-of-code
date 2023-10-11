import { expect, test } from "bun:test";
import { getMultipliedValueFromTwo, getMultipliedValueFromThree } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the multiplied value of two numbers that sum to 2020", () => {
  expect(getMultipliedValueFromTwo(testInput)).toBe(514579);

  console.log("🌟 Answer:", getMultipliedValueFromTwo(input));
});

test("should return the multiplied value of three numbers that sum to 2020", () => {
  expect(getMultipliedValueFromThree(testInput)).toBe(241861950);

  console.log("🌟 Answer:", getMultipliedValueFromThree(input));
});
