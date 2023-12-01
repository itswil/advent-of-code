import { expect, test } from "bun:test";
import { getCalibrationValueSum, getCalibrationValueSumV2 } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const testInputFile2 = Bun.file(`${PATH}/input-test2.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const testInput2 = await testInputFile2.text();
const input = await inputFile.text();

test("should return the sum of first and last digits", () => {
  expect(getCalibrationValueSum(testInput)).toBe(142);

  console.log("🌟 Answer:", getCalibrationValueSum(input));
});

test("should return the sum of first and last numbers (digits or words)", () => {
  expect(getCalibrationValueSumV2(testInput2)).toBe(281);

  console.log("🌟 Answer:", getCalibrationValueSumV2(input));
});
