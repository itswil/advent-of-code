import { expect, test } from "bun:test";
import { getNumberOfSteps, getNumberOfStepsV2, isAllEndInZ } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const testInputFile2 = Bun.file(`${PATH}/input-test2.txt`);
const testInputFile3 = Bun.file(`${PATH}/input-test3.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const testInput2 = await testInputFile2.text();
const testInput3 = await testInputFile3.text();
const input = await inputFile.text();

test("should return the number of steps needed to reach ZZZ", () => {
  expect(getNumberOfSteps(testInput)).toBe(2);
  expect(getNumberOfSteps(testInput2)).toBe(6);

  console.log("🌟 Answer:", getNumberOfSteps(input));
});

test.skip("should return true if all positions end in Z", () => {
  expect(isAllEndInZ(["AAZ", "BBZ", "ZZZ"])).toBe(true);
  expect(isAllEndInZ(["AAA", "BBZ", "ZZZ"])).toBe(false);
});

// Skipped: runs in 51s
test.skip("should return the number of steps needed to reach **Z", () => {
  expect(getNumberOfStepsV2(testInput3)).toBe(6);

  console.log("🌟 Answer:", getNumberOfStepsV2(input));
});
