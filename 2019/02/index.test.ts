import { expect, test } from "bun:test";
import { getPositionZeroValue, getNounVerbAnswer } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the value at position 0 on program halt", () => {
  expect(getPositionZeroValue(testInput, null, null)).toBe(3500);

  console.log("🌟 Answer:", getPositionZeroValue(input, 12, 2));
});

test("should return the noun and verb needed to output 19690720", () => {
  console.log("🌟 Answer:", getNounVerbAnswer(input));
});
