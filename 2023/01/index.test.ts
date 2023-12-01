import { expect, test } from "bun:test";
import { getCalibrationValueSum } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return ...", () => {
  expect(getCalibrationValueSum(testInput)).toBe(142);

  console.log("🌟 Answer:", getCalibrationValueSum(input));
});
