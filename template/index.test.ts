import { expect, test } from "bun:test";
import { getValue } from ".";

const PATH = import.meta.dir;
const testInput = Bun.file(`${PATH}/input-test.txt`);
const input = Bun.file(`${PATH}/input.txt`);

test("should return ...", async () => {
  expect(getValue(await testInput.text())).toBe(88888888);

  console.log("🌟 Answer:", getValue(await input.text()));
});
