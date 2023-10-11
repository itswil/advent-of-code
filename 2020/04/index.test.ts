import { expect, test } from "bun:test";
import {
  getNumberOfValidPassports,
  getNumberOfPassportsPassingValidation,
} from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const testInputFile2 = Bun.file(`${PATH}/input-test-2.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const testInput2 = await testInputFile2.text();
const input = await inputFile.text();

test("should return the number of valid passports", () => {
  expect(getNumberOfValidPassports(testInput)).toBe(2);

  console.log("🌟 Answer:", getNumberOfValidPassports(input));
});

test("should return the number of valid passports after validation", () => {
  expect(getNumberOfPassportsPassingValidation(testInput2)).toBe(4);

  console.log("🌟 Answer:", getNumberOfPassportsPassingValidation(input));
});
