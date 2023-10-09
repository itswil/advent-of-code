import { expect, test } from "bun:test";
import { getPowerConsumption } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the submarine power consumption", async () => {
  expect(getPowerConsumption(testInput)).toBe(198);

  console.log("🌟 Answer:", getPowerConsumption(input));
});
