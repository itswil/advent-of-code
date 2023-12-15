import { expect, test } from "bun:test";
import { getDiagnosticCode, getDiagnosticCodeV2 } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the diagnostic code from the program using value `1`", () => {
  // No test cases available

  console.log("🌟 Answer:", getDiagnosticCode(input, 1));
});

test("should return the diagnostic code from the program using value `5`", () => {
  const positionModeTestInput = "3,12,6,12,15,1,13,14,13,4,13,99,-1,0,1,9";
  const immediateModeTestInput = "3,3,1105,-1,9,1101,0,0,12,4,12,99,1";

  expect(getDiagnosticCodeV2(positionModeTestInput, 0)).toBe(0);
  expect(getDiagnosticCodeV2(positionModeTestInput, 2)).toBe(1);

  expect(getDiagnosticCodeV2(immediateModeTestInput, 0)).toBe(0);
  expect(getDiagnosticCodeV2(immediateModeTestInput, 2)).toBe(1);

  expect(getDiagnosticCodeV2(testInput, 7)).toBe(999);
  expect(getDiagnosticCodeV2(testInput, 8)).toBe(1000);
  expect(getDiagnosticCodeV2(testInput, 9)).toBe(1001);

  console.log("🌟 Answer:", getDiagnosticCodeV2(input, 5));
});
