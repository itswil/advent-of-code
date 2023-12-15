import { expect, test } from "bun:test";
import {
  getColumn,
  getHighestSeatId,
  getMissingSeatIds,
  getRow,
  getSeatId,
} from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the correct row of the boarding pass code", () => {
  const rowCode = "FBFBBFF".split("");
  const rows = [...Array(128).keys()];
  expect(getRow(rowCode, rows)).toBe(44);
});

test("should return the correct column of the boarding pass code", () => {
  const columnCode = "RLR".split("");
  const columns = [...Array(8).keys()];
  expect(getColumn(columnCode, columns)).toBe(5);
});

test("should return a seat ID from the cryptic boarding pass", () => {
  expect(getSeatId("FBFBBFFRLR")).toBe(357);
  expect(getSeatId("BFFFBBFRRR")).toBe(567);
  expect(getSeatId("FFFBBBFRRR")).toBe(119);
  expect(getSeatId("BBFFBBFRLL")).toBe(820);
});

test("should return the highest boarding pass seat ID", () => {
  expect(getHighestSeatId(testInput)).toBe(820);

  console.log("🌟 Answer:", getHighestSeatId(input));
});

test("should return missing seat IDs", () => {
  // No test data for this
  // expect(getMissingSeatIds(testInput)).toBe(820);

  console.log("🌟 Answer:", getMissingSeatIds(input));
});
