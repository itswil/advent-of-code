import { expect, test } from "bun:test";
import { getItemPrioritySum, getItemPrioritySumForGroups } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the sum of item priorities", () => {
  expect(getItemPrioritySum(testInput)).toBe(157);

  console.log("🌟 Answer:", getItemPrioritySum(input));
});

test("should return the sum of item priorities for group", () => {
  expect(getItemPrioritySumForGroups(testInput)).toBe(70);

  console.log("🌟 Answer:", getItemPrioritySumForGroups(input));
});
