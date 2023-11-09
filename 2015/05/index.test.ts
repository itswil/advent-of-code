import { expect, test } from "bun:test";
import { getNumberOfValidStrings, validateString } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return whether a string passes the criteria", () => {
  expect(validateString("ugknbfddgicrmopn")).toBe(true);
  expect(validateString("aaa")).toBe(true);

  expect(validateString("jchzalrnumimnmhp")).toBe(false);
  expect(validateString("haegwjzuvuyypxyu")).toBe(false);
  expect(validateString("dvszwmarrgswjxmb")).toBe(false);
});

test("should return the number of valid strings", () => {
  expect(getNumberOfValidStrings(testInput)).toBe(2);

  console.log("🌟 Answer:", getNumberOfValidStrings(input));
});
