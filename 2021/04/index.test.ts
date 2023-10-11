import { expect, test } from "bun:test";
import {
  checkBoard,
  getLosingBoardFinalScore,
  getWinningBoardFinalScore,
} from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return unmarked numbers if the board is winning (has 5 in a row or column)", () => {
  const board = [
    [3, 15, 0, 2, 22],
    [9, 18, 13, 17, 5],
    [19, 8, 7, 25, 23],
    [20, 11, 10, 24, 4],
    [14, 21, 16, 12, 6],
  ];
  const numbers1 = [8, 19, 7, 25, 23];
  const numbers2 = [7, 13, 10, 0, 16];

  expect(checkBoard(board, numbers1)).toEqual([
    3, 15, 0, 2, 22, 9, 18, 13, 17, 5, 20, 11, 10, 24, 4, 14, 21, 16, 12, 6,
  ]);
  expect(checkBoard(board, numbers2)).toEqual([
    3, 15, 2, 22, 9, 18, 17, 5, 19, 8, 25, 23, 20, 11, 24, 4, 14, 21, 12, 6,
  ]);
});

test("should return false if the board is NOT winning", () => {
  const board = [
    [3, 15, 0, 2, 22],
    [9, 18, 13, 17, 5],
    [19, 8, 7, 25, 23],
    [20, 11, 10, 24, 4],
    [14, 21, 16, 12, 6],
  ];
  const numbers1 = [19, 8, 999, 25, 23];
  const numbers2 = [7, 13, 10, 888, 16];

  expect(checkBoard(board, numbers1)).toBeFalse;
  expect(checkBoard(board, numbers2)).toBeFalse;
});

test("should return the final score of the winning board", () => {
  expect(getWinningBoardFinalScore(testInput)).toBe(4512);

  console.log("🌟 Answer:", getWinningBoardFinalScore(input));
});

test("should return the final score of the board to 'win' last", () => {
  expect(getLosingBoardFinalScore(testInput)).toBe(1924);

  console.log("🌟 Answer:", getLosingBoardFinalScore(input));
});
