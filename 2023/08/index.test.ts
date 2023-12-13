import { expect, test } from "bun:test";
import { getNumberOfSteps } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const testInputFile2 = Bun.file(`${PATH}/input-test2.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const testInput2 = await testInputFile2.text();
const input = await inputFile.text();

test("should return the number of steps needed to reach ZZZ", () => {
  expect(getNumberOfSteps(testInput)).toBe(2);
  expect(getNumberOfSteps(testInput2)).toBe(6);

  console.log("🌟 Answer:", getNumberOfSteps(input));
});
