import { expect, test } from "bun:test";
import { getPassword, getPasswordV2 } from ".";

test("should return an eight-char password for a door ID", () => {
  expect(getPassword("abc")).toBe("18f47a30");

  const puzzleInput = "wtnhxymk";
  console.log("🌟 Answer:", getPassword(puzzleInput));
});

test("should return an eight-char password for a door ID V2", () => {
  expect(getPasswordV2("abc")).toBe("05ace8e3");

  const puzzleInput = "wtnhxymk";
  console.log("🌟 Answer:", getPasswordV2(puzzleInput));
});
