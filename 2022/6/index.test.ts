import { expect, test } from "bun:test";
import {
  getNumberOfCharsUntilMarker,
  getNumberOfCharsUntilMarkerPart2,
} from ".";

const PATH = import.meta.dir;
const testInput = Bun.file(`${PATH}/input-test.txt`);
const input = Bun.file(`${PATH}/input.txt`);

test("should return the number of chars processed until marker", async () => {
  expect(getNumberOfCharsUntilMarker(await testInput.text())).toBe(7);

  console.log("🌟 Answer:", getNumberOfCharsUntilMarker(await input.text()));
});

test("should return the number of chars processed until marker (part 2)", async () => {
  expect(getNumberOfCharsUntilMarkerPart2(await testInput.text())).toBe(19);

  console.log(
    "🌟 Answer:",
    getNumberOfCharsUntilMarkerPart2(await input.text())
  );
});
