import { expect, test } from "bun:test";
import { getNumberOfHouses, getNumberOfHousesV2 } from ".";

const PATH = import.meta.dir;
const inputFile = Bun.file(`${PATH}/input.txt`);
const input = await inputFile.text();

test("should return the number of houses visited by Santa", () => {
  expect(getNumberOfHouses(">")).toBe(2);
  expect(getNumberOfHouses("^>v<")).toBe(4);
  expect(getNumberOfHouses("^v^v^v^v^v")).toBe(2);

  console.log("🌟 Answer:", getNumberOfHouses(input));
});

test("should return the number of houses visited by Santa and Robo-Santa", () => {
  expect(getNumberOfHousesV2("^v")).toBe(3);
  expect(getNumberOfHousesV2("^>v<")).toBe(3);
  expect(getNumberOfHousesV2("^v^v^v^v^v")).toBe(11);

  console.log("🌟 Answer:", getNumberOfHousesV2(input));
});
