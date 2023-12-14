import { expect, test } from "bun:test";
import { getNumberOfCrossOverPoints, getNumberOfCrossOverPointsV2 } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the number of horizontal and vertical cross over points", () => {
  expect(getNumberOfCrossOverPoints(testInput)).toBe(5);

  console.log("🌟 Answer:", getNumberOfCrossOverPoints(input));
});

test("should return the number of cross over points", () => {
  expect(getNumberOfCrossOverPointsV2(testInput)).toBe(12);

  console.log("🌟 Answer:", getNumberOfCrossOverPointsV2(input));
});
