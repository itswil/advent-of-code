import { expect, test } from "bun:test";
import {
  getTotalScore,
  getTotalScore2,
  getTotalScoreForTopSecretStrategy,
} from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return total score for the given strategy", () => {
  expect(getTotalScore(testInput)).toBe(15);

  console.log("🌟 Answer:", getTotalScore(input));
});

test("should return total score for the given strategy v2", () => {
  expect(getTotalScore2(testInput)).toBe(15);

  console.log("🌟 Answer:", getTotalScore2(input));
});

test("should return total score for ultra top secret strategy", () => {
  expect(getTotalScoreForTopSecretStrategy(testInput)).toBe(12);

  console.log("🌟 Answer:", getTotalScoreForTopSecretStrategy(input));
});
