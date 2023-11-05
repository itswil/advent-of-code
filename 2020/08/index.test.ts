import { expect, test } from "bun:test";
import { getAccumulatorValue, getAccumulatorValueOnTermination } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the accumulator value before infinite loop", () => {
  expect(getAccumulatorValue(testInput)).toBe(5);

  console.log("🌟 Answer:", getAccumulatorValue(input));
});

test("should return the accumulator value on termination", () => {
  expect(getAccumulatorValueOnTermination(testInput)).toBe(8);

  console.log("🌟 Answer:", getAccumulatorValueOnTermination(input));
});
