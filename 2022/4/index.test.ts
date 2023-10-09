import { expect, test } from "bun:test";
import {
  getNumberOfContainedAssignmentPairs,
  getNumberOfOverlappingAssignmentPairs,
} from ".";

const PATH = import.meta.dir;
const testInput = Bun.file(`${PATH}/input-test.txt`);
const input = Bun.file(`${PATH}/input.txt`);

test("should return the number of assignment pairs which fully contain the other", async () => {
  expect(getNumberOfContainedAssignmentPairs(await testInput.text())).toBe(2);

  console.log(
    "🌟 Answer:",
    getNumberOfContainedAssignmentPairs(await input.text())
  );
});

test("should return the number of assignment pairs where the ranges overlap", async () => {
  expect(getNumberOfOverlappingAssignmentPairs(await testInput.text())).toBe(4);

  console.log(
    "🌟 Answer:",
    getNumberOfOverlappingAssignmentPairs(await input.text())
  );
});
