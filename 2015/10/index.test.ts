import { expect, test } from "bun:test";
import { getGeneratedText } from ".";

test("should return the generated text", () => {
  expect(getGeneratedText("1", 1)).toBe("11");
  expect(getGeneratedText("11", 1)).toBe("21");
  expect(getGeneratedText("21", 1)).toBe("1211");
  expect(getGeneratedText("1211", 1)).toBe("111221");
  expect(getGeneratedText("111221", 1)).toBe("312211");

  expect(getGeneratedText("1", 5)).toBe("312211");

  console.log("🌟 Answer:", getGeneratedText("3113322113", 40).length);
  console.log("🌟 Answer:", getGeneratedText("3113322113", 50).length);
});
