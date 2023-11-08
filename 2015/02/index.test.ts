import { expect, test } from "bun:test";
import {
  getRibbonLength,
  getTotalRibbonLength,
  getTotalWrappingPaperArea,
  getWrappingPaperArea,
} from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the area of wrapping paper", () => {
  expect(getWrappingPaperArea("2x3x4")).toBe(58);
  expect(getWrappingPaperArea("1x1x10")).toBe(43);
});

test("should return the total area of wrapping paper required", () => {
  expect(getTotalWrappingPaperArea(testInput)).toBe(101);

  console.log("🌟 Answer:", getTotalWrappingPaperArea(input));
});

test("should return the length of ribbon", () => {
  expect(getRibbonLength("2x3x4")).toBe(34);
  expect(getRibbonLength("1x1x10")).toBe(14);
});

test("should return the total length of ribbon required", () => {
  expect(getTotalRibbonLength(testInput)).toBe(48);

  console.log("🌟 Answer:", getTotalRibbonLength(input));
});
