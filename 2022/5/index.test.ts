import { expect, test } from "bun:test";
import {
  convertCratesInputIntoStacksArray,
  getCrates,
  getCratesWithCrateMover9001,
} from ".";

const PATH = import.meta.dir;
const testInput = Bun.file(`${PATH}/input-test.txt`);
const input = Bun.file(`${PATH}/input.txt`);

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
  expect(getCrates(await testInput.text())).toBe("CMZ");

  console.log("🌟 Answer:", getCrates(await input.text()));
});

test("should return the crate on the top of each stack after using the CrateMover 9001", async () => {
  expect(getCratesWithCrateMover9001(await testInput.text())).toBe("MCD");

  console.log("🌟 Answer:", getCratesWithCrateMover9001(await input.text()));
});
