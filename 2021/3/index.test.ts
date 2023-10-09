import { expect, test } from "bun:test";
import { getPowerConsumption } from ".";

const PATH = import.meta.dir;
const testInput = Bun.file(`${PATH}/input-test.txt`);
const input = Bun.file(`${PATH}/input.txt`);

test("should return the submarine power consumption", async () => {
  expect(getPowerConsumption(await testInput.text())).toBe(198);

  console.log("🌟 Answer:", getPowerConsumption(await input.text()));
});
