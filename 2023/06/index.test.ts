import { expect, test } from "bun:test";
import { getWinningStrategy, getWinningStrategyProduct } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the product of the number of winning strategies", () => {
  expect(getWinningStrategyProduct(testInput)).toBe(288);

  console.log("🌟 Answer:", getWinningStrategyProduct(input));
});

test("should return the number of winning strategies", () => {
  expect(getWinningStrategy(testInput)).toBe(71503);

  console.log("🌟 Answer:", getWinningStrategy(input));
});
