import { expect, test } from "bun:test";
import { getHorizontalDepthValue, getHorizontalDepthValue2 } from ".";

const PATH = import.meta.dir;
const testInput = Bun.file(`${PATH}/input-test.txt`);
const input = Bun.file(`${PATH}/input.txt`);

test("should return the product of the horizontal position and depth", async () => {
  expect(getHorizontalDepthValue(await testInput.text())).toBe(150);

  console.log("🌟 Answer:", getHorizontalDepthValue(await input.text()));
});

test("should return the product of the horizontal position and depth 2", async () => {
  expect(getHorizontalDepthValue2(await testInput.text())).toBe(900);

  console.log("🌟 Answer:", getHorizontalDepthValue2(await input.text()));
});
