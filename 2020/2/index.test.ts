import { expect, test } from "bun:test";
import { getNumberOfValidPasswords, getNumberOfValidPasswordsPartTwo } from ".";

const PATH = import.meta.dir;
const testInput = Bun.file(`${PATH}/input-test.txt`);
const input = Bun.file(`${PATH}/input.txt`);

test("should return a valid passwords count based on the number of occurences of a letter", async () => {
  expect(getNumberOfValidPasswords(await testInput.text())).toBe(2);

  console.log("🌟 Answer:", getNumberOfValidPasswords(await input.text()));
});

test("should return a valid passwords count based on the position of a letter", async () => {
  expect(getNumberOfValidPasswordsPartTwo(await testInput.text())).toBe(1);

  console.log(
    "🌟 Answer:",
    getNumberOfValidPasswordsPartTwo(await input.text())
  );
});
