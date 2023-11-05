import { expect, test } from "bun:test";
import { getMultiple, getDecodedImageMessage } from ".";

const PATH = import.meta.dir;
const inputFile = Bun.file(`${PATH}/input.txt`);
const input = await inputFile.text();

test("should return a multiple from the layer with fewest zeroes", () => {
  const testInput = "123456789012";
  expect(getMultiple(testInput, 3, 2)).toBe(1);

  console.log("🌟 Answer:", getMultiple(input, 25, 6));
});

test("should return a message from the decoded image", () => {
  const testInput = "0222112222120000";
  // expect(getDecodedImageMessage(testInput, 2, 2)).toBe(1);

  console.log("🌟 Answer:", getDecodedImageMessage(input, 25, 6));
});
