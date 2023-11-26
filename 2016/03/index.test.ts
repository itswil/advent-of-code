import { expect, test } from "bun:test";
import {
  getNumberOfPossibleTriangles,
  getNumberOfPossibleTrianglesV2,
} from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the number of 'possible' triangles", () => {
  expect(getNumberOfPossibleTriangles(testInput)).toBe(2);

  console.log("🌟 Answer:", getNumberOfPossibleTriangles(input));
});

test("should return the number of 'possible' triangles V2", () => {
  expect(getNumberOfPossibleTrianglesV2(testInput)).toBe(5);

  console.log("🌟 Answer:", getNumberOfPossibleTrianglesV2(input));
});
