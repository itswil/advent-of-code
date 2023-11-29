import { expect, test } from "bun:test";
import { getMessage, getMessageV2 } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the error-corrected message using the most common letter", () => {
  expect(getMessage(testInput)).toBe("easter");

  console.log("🌟 Answer:", getMessage(input));
});

test("should return the error-corrected message using the least common letter", () => {
  expect(getMessageV2(testInput)).toBe("advent");

  console.log("🌟 Answer:", getMessageV2(input));
});
