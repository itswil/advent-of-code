import { expect, test } from "bun:test";
import {
  getNumberOfValidStrings,
  getNumberOfValidStringsV2,
  validateString,
  validateStringV2,
} from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const testInputFile2 = Bun.file(`${PATH}/input-test2.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const testInput2 = await testInputFile2.text();
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

test("should return whether a string passes the criteria V2", () => {
  expect(validateStringV2("qjhvhtzxzqqjkmpb")).toBe(true);
  expect(validateStringV2("xxyxx")).toBe(true);

  expect(validateStringV2("uurcxstgmygtbstg")).toBe(false);
  expect(validateStringV2("ieodomkazucvgmuy")).toBe(false);
});

test("should return the number of valid strings V2", () => {
  expect(getNumberOfValidStringsV2(testInput2)).toBe(2);

  console.log("🌟 Answer:", getNumberOfValidStringsV2(input));
});
