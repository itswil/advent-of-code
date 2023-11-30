import { expect, test } from "bun:test";
import { getNumberOfSslIps, getNumberOfTlsIps } from ".";

const PATH = import.meta.dir;
const testInputFile = Bun.file(`${PATH}/input-test.txt`);
const testInputFile2 = Bun.file(`${PATH}/input-test2.txt`);
const inputFile = Bun.file(`${PATH}/input.txt`);
const testInput = await testInputFile.text();
const testInput2 = await testInputFile2.text();
const input = await inputFile.text();

test("should return number of TLS-supporting IPs", () => {
  expect(getNumberOfTlsIps(testInput)).toBe(2);

  console.log("🌟 Answer:", getNumberOfTlsIps(input));
});

test("should return number of SSL-supporting IPs", () => {
  expect(getNumberOfSslIps(testInput2)).toBe(3);

  console.log("🌟 Answer:", getNumberOfSslIps(input));
});
