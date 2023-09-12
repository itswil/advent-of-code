import { expect, test } from "bun:test";
import { getMultipliedValueFromTwo, getMultipliedValueFromThree } from ".";

const PATH = import.meta.dir;
const testInput = Bun.file(`${PATH}/input-test.txt`);
const input = Bun.file(`${PATH}/input.txt`);

test("should return the multiplied value of two numbers that sum to 2020", async () => {
  expect(getMultipliedValueFromTwo(await testInput.text())).toBe(514579);

  console.log("🌟 Answer:", getMultipliedValueFromTwo(await input.text()));
});

test("should return the multiplied value of three numbers that sum to 2020", async () => {
  expect(getMultipliedValueFromThree(await testInput.text())).toBe(241861950);

  console.log("🌟 Answer:", getMultipliedValueFromThree(await input.text()));
});
