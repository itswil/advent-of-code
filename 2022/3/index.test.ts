import { expect, test } from "bun:test";
import { getItemPrioritySum, getItemPrioritySumForGroups } from ".";

const PATH = import.meta.dir;
const testInput = Bun.file(`${PATH}/input-test.txt`);
const input = Bun.file(`${PATH}/input.txt`);

test("should return the sum of item priorities", async () => {
  expect(getItemPrioritySum(await testInput.text())).toBe(157);

  console.log("🌟 Answer:", getItemPrioritySum(await input.text()));
});

test("should return the sum of item priorities for group", async () => {
  expect(getItemPrioritySumForGroups(await testInput.text())).toBe(70);

  console.log("🌟 Answer:", getItemPrioritySumForGroups(await input.text()));
});
