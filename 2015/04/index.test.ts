import { expect, test } from "bun:test";
import { getSuffix, getSuffixV2 } from ".";

test("should return the suffix which hashes to a hex starting with 00000", () => {
  expect(getSuffix("abcdef")).toBe(609043);
  expect(getSuffix("pqrstuv")).toBe(1048970);

  console.log("🌟 Answer:", getSuffix("ckczppom"));
});

test("should return the suffix which hashes to a hex starting with 000000", () => {
  // no test case available

  console.log("🌟 Answer:", getSuffixV2("ckczppom"));
});
