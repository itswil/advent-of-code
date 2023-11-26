import { expect, test } from "bun:test";
import { getNumberOfPossibleTriangles } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the number of 'possible' triangles", () => {
  expect(getNumberOfPossibleTriangles(testInput)).toBe(2);

  console.log("🌟 Answer:", getNumberOfPossibleTriangles(input));
});
