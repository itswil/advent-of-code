import { expect, test } from "bun:test";
import {
  convertCratesInputIntoStacksArray,
  getCrates,
  getCratesWithCrateMover9001,
} from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should convert the string input into an array of arrays", () => {
  const stringInput = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 `;

  expect(convertCratesInputIntoStacksArray(stringInput)).toEqual([
    ["Z", "N"],
    ["M", "C", "D"],
    ["P"],
  ]);
});

test("should return the crate on the top of each stack", async () => {
  expect(getCrates(testInput)).toBe("CMZ");

  console.log("🌟 Answer:", getCrates(input));
});

test("should return the crate on the top of each stack after using the CrateMover 9001", async () => {
  expect(getCratesWithCrateMover9001(testInput)).toBe("MCD");

  console.log("🌟 Answer:", getCratesWithCrateMover9001(input));
});
