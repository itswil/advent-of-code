import { expect, test } from "bun:test";
import {
  getInMemoryStringLength,
  getStringLengthDifference,
  getEncodedStringLength,
  getStringLengthDifferenceV2,
} from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the in-memory length of a string", () => {
  expect(getInMemoryStringLength(`""`)).toBe(0);
  expect(getInMemoryStringLength(`"abc"`)).toBe(3);
  expect(getInMemoryStringLength(`"aaa\"aaa"`)).toBe(7);
  expect(getInMemoryStringLength(`"\x27"`)).toBe(1);
});

test("should return total string length minus total in-memory string length", () => {
  expect(getStringLengthDifference(testInput)).toBe(12);

  console.log("🌟 Answer:", getStringLengthDifference(input));
});

test("should return the encoded length of a string", () => {
  expect(getEncodedStringLength(`""`)).toBe(6);
  expect(getEncodedStringLength(`"abc"`)).toBe(9);
  expect(getEncodedStringLength(`"aaa\\\"aaa"`)).toBe(16);
  expect(getEncodedStringLength(`"\\x27"`)).toBe(11);
});

test("should return total encoded string length minus total string length", () => {
  expect(getStringLengthDifferenceV2(testInput)).toBe(19);

  console.log("🌟 Answer:", getStringLengthDifferenceV2(input));
});
