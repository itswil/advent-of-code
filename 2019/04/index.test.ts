import { test } from "bun:test";
import { getNumberOfPasswords, getNumberOfPasswordsStrict } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return number of passwords that meet the criteria", () => {
  console.log("🌟 Answer:", getNumberOfPasswords(178416, 676461));
});

test("should return number of passwords that meet the stricter criteria", () => {
  console.log("🌟 Answer:", getNumberOfPasswordsStrict(178416, 676461));
});
