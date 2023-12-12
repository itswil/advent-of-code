import { expect, test } from "bun:test";
import {
  HANDS,
  compareHands,
  getHighestHandStrength,
  getTotalWinnings,
} from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const input = await inputFile.text();

test("should return the highest strength of the hand", () => {
  expect(getHighestHandStrength("AAAAA")).toBe(HANDS.FIVE_KIND);

  expect(getHighestHandStrength("8AAAA")).toBe(HANDS.FOUR_KIND);
  expect(getHighestHandStrength("AA8AA")).toBe(HANDS.FOUR_KIND);
  expect(getHighestHandStrength("AAA8A")).toBe(HANDS.FOUR_KIND);

  expect(getHighestHandStrength("23332")).toBe(HANDS.FULL_HOUSE);
  expect(getHighestHandStrength("33322")).toBe(HANDS.FULL_HOUSE);
  expect(getHighestHandStrength("22333")).toBe(HANDS.FULL_HOUSE);

  expect(getHighestHandStrength("9TTT8")).toBe(HANDS.THREE_KIND);
  expect(getHighestHandStrength("TTT98")).toBe(HANDS.THREE_KIND);
  expect(getHighestHandStrength("98TTT")).toBe(HANDS.THREE_KIND);

  expect(getHighestHandStrength("23432")).toBe(HANDS.TWO_PAIR);
  expect(getHighestHandStrength("22433")).toBe(HANDS.TWO_PAIR);
  expect(getHighestHandStrength("22334")).toBe(HANDS.TWO_PAIR);
  expect(getHighestHandStrength("27575")).toBe(HANDS.TWO_PAIR);

  expect(getHighestHandStrength("A234A")).toBe(HANDS.ONE_PAIR);
  expect(getHighestHandStrength("AA234")).toBe(HANDS.ONE_PAIR);
  expect(getHighestHandStrength("23AA4")).toBe(HANDS.ONE_PAIR);

  expect(getHighestHandStrength("23456")).toBe(HANDS.HIGH_CARD);
  expect(getHighestHandStrength("34568")).toBe(HANDS.HIGH_CARD);
  expect(getHighestHandStrength("34JQK")).toBe(HANDS.HIGH_CARD);
});

test("should return 1 if the first hand beats the second", () => {
  expect(compareHands("22233", "KKKQQ")).toBe(-1);
  expect(compareHands("22233", "KKK23")).toBe(1);

  expect(compareHands("TTT23", "23TTT")).toBe(1);

  expect(compareHands("23456", "24356")).toBe(-1);

  expect(compareHands("44T44", "48888")).toBe(-1);
  expect(compareHands("4T444", "48888")).toBe(1);

  expect(compareHands("33332", "2AAAA")).toBe(1);

  expect(compareHands("77788", "77888")).toBe(-1);
});

test("should return the total winnings", () => {
  expect(getTotalWinnings(testInput)).toBe(6440);

  console.log("🌟 Answer:", getTotalWinnings(input));
});
