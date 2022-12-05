import { readFileSync } from "fs";

const inputFile = readFileSync(`${import.meta.dir}/testInput.txt`).toString();
// const inputFile = readFileSync(`${import.meta.dir}/input.txt`).toString();

const lines: Array<string> = inputFile.split("\n");

console.log("🚀 ~", lines);
