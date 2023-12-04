import { expect, test } from "bun:test";
import {
  calculateScore,
  getNumberOfScratchcardsWon,
  getScatchcardScore,
  getWinningNumbers,
} from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the matching winning numbers", () => {
  expect(
    getWinningNumbers([41, 48, 83, 86, 17], [83, 86, 6, 31, 17, 9, 48, 53])
  ).toEqual([83, 86, 17, 48]);
  expect(
    getWinningNumbers([13, 32, 20, 16, 61], [61, 30, 68, 82, 17, 32, 24, 19])
  ).toEqual([61, 32]);
  expect(
    getWinningNumbers([1, 21, 53, 59, 44], [69, 82, 63, 72, 16, 21, 14, 1])
  ).toEqual([21, 1]);
});

test("should return the correct score", () => {
  expect(calculateScore(4)).toBe(8);
  expect(calculateScore(2)).toBe(2);
  expect(calculateScore(1)).toBe(1);
  expect(calculateScore(0)).toBe(0);
});

test("should return the final scratchcard score", () => {
  expect(getScatchcardScore(testInput)).toBe(13);

  console.log("🌟 Answer:", getScatchcardScore(input));
});

test("should return the number of scratchcards won", () => {
  expect(getNumberOfScratchcardsWon(testInput)).toBe(30);

  console.log("🌟 Answer:", getNumberOfScratchcardsWon(input));
});
