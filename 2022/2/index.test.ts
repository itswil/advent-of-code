import { expect, test } from "bun:test";
import {
  getTotalScore,
  getTotalScore2,
  getTotalScoreForTopSecretStrategy,
} from ".";

const PATH = import.meta.dir;
const testInput = Bun.file(`${PATH}/input-test.txt`);
const input = Bun.file(`${PATH}/input.txt`);

test("should return total score for the given strategy", async () => {
  expect(getTotalScore(await testInput.text())).toBe(15);

  console.log("🌟 Answer:", getTotalScore(await input.text()));
});

test("should return total score for the given strategy v2", async () => {
  expect(getTotalScore2(await testInput.text())).toBe(15);

  console.log("🌟 Answer:", getTotalScore2(await input.text()));
});

test("should return total score for ultra top secret strategy", async () => {
  expect(getTotalScoreForTopSecretStrategy(await testInput.text())).toBe(12);

  console.log(
    "🌟 Answer:",
    getTotalScoreForTopSecretStrategy(await input.text())
  );
});
