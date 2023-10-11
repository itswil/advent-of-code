import { expect, test } from "bun:test";
import { getNumberOfValidPasswords, getNumberOfValidPasswordsPartTwo } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return a valid passwords count based on the number of occurences of a letter", () => {
  expect(getNumberOfValidPasswords(testInput)).toBe(2);

  console.log("🌟 Answer:", getNumberOfValidPasswords(input));
});

test("should return a valid passwords count based on the position of a letter", () => {
  expect(getNumberOfValidPasswordsPartTwo(testInput)).toBe(1);

  console.log("🌟 Answer:", getNumberOfValidPasswordsPartTwo(input));
});
