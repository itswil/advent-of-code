import { expect, test } from "bun:test";
import { getDiagnosticCode } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the diagnostic code from the program", () => {
  // No test cases available

  console.log("🌟 Answer:", getDiagnosticCode(input, 1));
});
