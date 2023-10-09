import { expect, test } from "bun:test";
import {
  getHighestTotalCalories,
  getHighestTotalCaloriesForTop3Elves,
} from ".";

const PATH = import.meta.dir;
const testInput = Bun.file(`${PATH}/input-test.txt`);
const input = Bun.file(`${PATH}/input.txt`);

test("should return the total calories for the elf carrying the most", async () => {
  expect(getHighestTotalCalories(await testInput.text())).toBe(24000);

  console.log("🌟 Answer:", getHighestTotalCalories(await input.text()));
});

test("should return the total calories for the top 3 elves carrying the most", async () => {
  expect(getHighestTotalCaloriesForTop3Elves(await testInput.text())).toBe(
    45000
  );

  console.log(
    "🌟 Answer:",
    getHighestTotalCaloriesForTop3Elves(await input.text())
  );
});
