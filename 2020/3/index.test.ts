import { expect, test } from "bun:test";
import { getNumberOfTrees, getNumberOfTreesFromMaps } from ".";

const PATH = import.meta.dir;
const testInput = Bun.file(`${PATH}/input-test.txt`);
const input = Bun.file(`${PATH}/input.txt`);

test("should return the number of trees encountered", async () => {
  expect(getNumberOfTrees(await testInput.text())).toBe(7);

  console.log("🌟 Answer:", getNumberOfTrees(await input.text()));
});

test("should return the number of trees encountered from several routes", async () => {
  expect(getNumberOfTreesFromMaps(await testInput.text())).toBe(336);

  console.log("🌟 Answer:", getNumberOfTreesFromMaps(await input.text()));
});
