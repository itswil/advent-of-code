import { expect, test } from "bun:test";
import {
  getNumberOfCharsUntilMarker,
  getNumberOfCharsUntilMarkerPart2,
} from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the number of chars processed until marker", () => {
  expect(getNumberOfCharsUntilMarker(testInput)).toBe(7);

  console.log("🌟 Answer:", getNumberOfCharsUntilMarker(input));
});

test("should return the number of chars processed until marker (part 2)", () => {
  expect(getNumberOfCharsUntilMarkerPart2(testInput)).toBe(19);

  console.log("🌟 Answer:", getNumberOfCharsUntilMarkerPart2(input));
});
