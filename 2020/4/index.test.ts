import { expect, test } from "bun:test";
import {
  getNumberOfValidPassports,
  getNumberOfPassportsPassingValidation,
} from ".";

const PATH = import.meta.dir;
const testInput = Bun.file(`${PATH}/input-test.txt`);
const testInput2 = Bun.file(`${PATH}/input-test-2.txt`);
const input = Bun.file(`${PATH}/input.txt`);

test("should return the number of valid passports", async () => {
  expect(getNumberOfValidPassports(await testInput.text())).toBe(2);

  console.log("🌟 Answer:", getNumberOfValidPassports(await input.text()));
});

test("should return the number of valid passports after validation", async () => {
  expect(getNumberOfPassportsPassingValidation(await testInput2.text())).toBe(
    4
  );

  console.log(
    "🌟 Answer:",
    getNumberOfPassportsPassingValidation(await input.text())
  );
});
