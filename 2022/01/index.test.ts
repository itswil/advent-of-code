import { expect, test } from "bun:test";
import {
  getHighestTotalCalories,
  getHighestTotalCaloriesForTop3Elves,
} from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the total calories for the elf carrying the most", () => {
  expect(getHighestTotalCalories(testInput)).toBe(24000);

  console.log("🌟 Answer:", getHighestTotalCalories(input));
});

test("should return the total calories for the top 3 elves carrying the most", () => {
  expect(getHighestTotalCaloriesForTop3Elves(testInput)).toBe(45000);

  console.log("🌟 Answer:", getHighestTotalCaloriesForTop3Elves(input));
});
