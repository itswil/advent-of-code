import { expect, test } from "bun:test";
import { getDestinationDistance, getIntersectionDistance } from ".";

const PATH = import.meta.dir;
const inputFile = Bun.file(`${PATH}/input.txt`);
const input = await inputFile.text();

test("should return the Manhattan distance of the destination from the origin", () => {
  expect(getDestinationDistance("R2, L3")).toBe(5);
  expect(getDestinationDistance("R2, R2, R2")).toBe(2);
  expect(getDestinationDistance("R5, L5, R5, R3")).toBe(12);

  console.log("🌟 Answer:", getDestinationDistance(input));
});

test("should return the Manhattan distance of the first intersection from the origin", () => {
  expect(getIntersectionDistance("R8, R4, R4, R8")).toBe(4);

  console.log("🌟 Answer:", getIntersectionDistance(input));
});
