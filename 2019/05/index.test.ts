import { expect, test } from "bun:test";
import { getDiagnosticCode } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the diagnostic code from the program", () => {
  // expect(getDiagnosticCode(testInput)).toBe(88888888);

  console.log("🌟 Answer:", getDiagnosticCode(input));
});
