import { expect, test } from "bun:test";
import { getLitLightsCount, getSumBrightness, parseCommand } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const testInputFile2 = Bun.file(`${PATH}/input-test2.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const testInput2 = await testInputFile2.text();
const input = await inputFile.text();

test("should parse commands correctly", () => {
  expect(parseCommand("turn on 0,888 through 100,999")).toEqual([
    "TURN_ON",
    [0, 100],
    [888, 999],
  ]);
});

test("should return the number of lit lights in the 999x999 grid", () => {
  expect(getLitLightsCount(testInput)).toBe(25);

  console.log("🌟 Answer:", getLitLightsCount(input));
});

test("should return the sum brightness of the light array", () => {
  expect(getSumBrightness(testInput2)).toBe(32);

  console.log("🌟 Answer:", getSumBrightness(input));
});
