import { expect, test } from "bun:test";
import { getNumberOfIncrements, getNumberOfSumIncrements } from ".";

const PATH = import.meta.dir;
const testInput = Bun.file(`${PATH}/input-test.txt`);
const input = Bun.file(`${PATH}/input.txt`);

test("should return the number of increments", async () => {
  expect(getNumberOfIncrements(await testInput.text())).toBe(7);

  console.log("🌟 Answer:", getNumberOfIncrements(await input.text()));
});

test("should return the number of larger sums than the previous", async () => {
  expect(getNumberOfSumIncrements(await testInput.text())).toBe(5);

  console.log("🌟 Answer:", getNumberOfSumIncrements(await input.text()));
});
