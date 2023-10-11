import { expect, test } from "bun:test";
import { getHorizontalDepthValue, getHorizontalDepthValue2 } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the product of the horizontal position and depth", () => {
  expect(getHorizontalDepthValue(testInput)).toBe(150);

  console.log("🌟 Answer:", getHorizontalDepthValue(input));
});

test("should return the product of the horizontal position and depth 2", () => {
  expect(getHorizontalDepthValue2(testInput)).toBe(900);

  console.log("🌟 Answer:", getHorizontalDepthValue2(input));
});
