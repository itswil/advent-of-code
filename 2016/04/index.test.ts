import { expect, test } from "bun:test";
import {
  decryptName,
  extractSectorId,
  getNorthPoleRoomSectorId,
  getSectorIdSum,
  isRealRoom,
} from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the sector ID of an encrypted name", () => {
  expect(extractSectorId("aaaaa-bbb-z-y-x-123[abxyz]")).toBe(123);
  expect(extractSectorId("a-b-c-d-e-f-g-h-987[abcde]")).toBe(987);
  expect(extractSectorId("not-a-real-room-404[oarel]")).toBe(404);
  expect(extractSectorId("totally-real-room-200[decoy]")).toBe(200);
});

test("should return true if the checksum is the five most common letters", () => {
  expect(isRealRoom("aaaaa-bbb-z-y-x-123[abxyz]")).toBe(true);
  expect(isRealRoom("a-b-c-d-e-f-g-h-987[abcde]")).toBe(true);
  expect(isRealRoom("not-a-real-room-404[oarel]")).toBe(true);
  expect(isRealRoom("totally-real-room-200[decoy]")).toBe(false);
});

test("should return the sum of sector IDs for real rooms", () => {
  expect(getSectorIdSum(testInput)).toBe(1514);

  console.log("🌟 Answer:", getSectorIdSum(input));
});

test("should return a decrypted name", () => {
  expect(decryptName("qzmt-zixmtkozy-ivhz-343[abcd]")).toBe(
    "very encrypted name 343"
  );
});

test("should return the sector ID of the room with North Pole objects", () => {
  // no test cases

  console.log("🌟 Answer:", getNorthPoleRoomSectorId(input));
});
