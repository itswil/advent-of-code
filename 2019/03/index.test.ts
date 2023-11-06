import { expect, test } from "bun:test";
import {
  getClosestIntersection,
  getCoordsForWirePath,
  getWireCrossCoords,
} from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const testInputFile2 = Bun.file(`${PATH}/input-test2.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const testInput2 = await testInputFile2.text();
const input = await inputFile.text();

test("should return an array of coordinates based on a string path", () => {
  const path = "R5,U10,L3,D6";
  const solution = [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [5, 1],
    [5, 2],
    [5, 3],
    [5, 4],
    [5, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [5, 9],
    [5, 10],
    [4, 10],
    [3, 10],
    [2, 10],
    [2, 9],
    [2, 8],
    [2, 7],
    [2, 6],
    [2, 5],
    [2, 4],
  ];
  expect(getCoordsForWirePath(path)).toStrictEqual(solution);
});

test("should return an array of matching coordinates", () => {
  const path1 = [
    [0, 0],
    [0, 10],
    [5, 15],
    [20, 25],
  ];
  const path2 = [
    [0, 0],
    [0, 1],
    [0, 10],
    [3, 10],
    [5, 15],
    [30, 30],
  ];
  expect(getWireCrossCoords(path1, path2)).toStrictEqual([
    [0, 0],
    [0, 10],
    [5, 15],
  ]);
});

test("should return the Manhattan distance to the closest intersection", () => {
  expect(getClosestIntersection(testInput)).toBe(159);
  expect(getClosestIntersection(testInput2)).toBe(135);

  console.log("🌟 Answer:", getClosestIntersection(input));
});
