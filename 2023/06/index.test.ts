import { expect, test } from "bun:test";
import { getWinningStrategyProduct } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the product of the number of winning strategies", () => {
  expect(getWinningStrategyProduct(testInput)).toBe(288);

  console.log("🌟 Answer:", getWinningStrategyProduct(input));
});
