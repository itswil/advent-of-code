import { expect, test } from "bun:test";
import { getValue } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

// test("should return ...", async () => {
//   expect(getValue(testInput)).toBe(88888888);

//   console.log("🌟 Answer:", getValue(input));
// });
