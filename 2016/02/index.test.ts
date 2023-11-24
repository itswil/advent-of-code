import { expect, test } from "bun:test";
import { convertToKeypadValues, getBathroomCode, getBathroomCodeV2 } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

const KEYPAD_MAP = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
];

test("should convert coordinates into keypad values", () => {
  expect(
    convertToKeypadValues(
      [
        [0, 0],
        [1, 0],
        [2, 0],
      ],
      KEYPAD_MAP
    )
  ).toBe("789");
  expect(
    convertToKeypadValues(
      [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
      KEYPAD_MAP
    )
  ).toBe("456");
  expect(
    convertToKeypadValues(
      [
        [0, 2],
        [1, 2],
        [2, 2],
      ],
      KEYPAD_MAP
    )
  ).toBe("123");
});

test("should return the bathroom code", () => {
  expect(getBathroomCode(testInput)).toBe("1985");

  console.log("🌟 Answer:", getBathroomCode(input));
});

test("should return the bathroom code V2", () => {
  expect(getBathroomCodeV2(testInput)).toBe("5DB3");

  console.log("🌟 Answer:", getBathroomCodeV2(input));
});
