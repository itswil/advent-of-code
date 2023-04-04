import { expect, test } from "bun:test";
import { getHighestCalories } from "./a";

const PATH = import.meta.dir;
const testInput = Bun.file(`${PATH}/input-test.txt`);
const input = Bun.file(`${PATH}/input.txt`);

test("should return total calories of the elf carrying the most", async () => {
  expect(getHighestCalories(await testInput.text())).toBe(24000);

  console.log("🌟 Answer:", getHighestCalories(await input.text()));
});
