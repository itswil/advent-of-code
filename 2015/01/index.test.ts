import { expect, test } from "bun:test";
import { getFloor, getPositionOnEnteringBasement } from ".";

const PATH = import.meta.dir;
const inputFile = Bun.file(`${PATH}/input.txt`);
const input = await inputFile.text();

test("should return Santa's destination floor", () => {
  expect(getFloor("(())")).toBe(0);
  expect(getFloor("()()")).toBe(0);
  expect(getFloor("(((")).toBe(3);
  expect(getFloor("(()(()(")).toBe(3);
  expect(getFloor("))(((((")).toBe(3);
  expect(getFloor("())")).toBe(-1);
  expect(getFloor("))(")).toBe(-1);
  expect(getFloor(")))")).toBe(-3);
  expect(getFloor(")())())")).toBe(-3);

  console.log("🌟 Answer:", getFloor(input));
});

test("should return the char position when Santa enters the basement (-1)", () => {
  expect(getPositionOnEnteringBasement(")")).toBe(1);
  expect(getPositionOnEnteringBasement("()())")).toBe(5);

  console.log("🌟 Answer:", getPositionOnEnteringBasement(input));
});
