import { expect, test } from "bun:test";
import {
  getNumberOfContainedAssignmentPairs,
  getNumberOfOverlappingAssignmentPairs,
} from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the number of assignment pairs which fully contain the other", () => {
  expect(getNumberOfContainedAssignmentPairs(testInput)).toBe(2);

  console.log("🌟 Answer:", getNumberOfContainedAssignmentPairs(input));
});

test("should return the number of assignment pairs where the ranges overlap", () => {
  expect(getNumberOfOverlappingAssignmentPairs(testInput)).toBe(4);

  console.log("🌟 Answer:", getNumberOfOverlappingAssignmentPairs(input));
});
