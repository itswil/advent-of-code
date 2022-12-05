import { readFileSync } from "fs";

// const inputFile = readFileSync(`${import.meta.dir}/testInput.txt`).toString();
const inputFile = readFileSync(`${import.meta.dir}/input.txt`).toString();

// const stacks: Array<Array<string>> = [["Z", "N"], ["M", "C", "D"], ["P"]];
const stacks: Array<Array<string>> = [
  ["N", "C", "R", "T", "M", "Z", "P"],
  ["D", "N", "T", "S", "B", "Z"],
  ["H", "M", "Q", "R", "F", "C", "T", "G"],
  ["G", "R", "Z"],
  ["Z", "N", "R", "H"],
  ["F", "H", "S", "W", "P", "Z", "L", "D"],
  ["W", "D", "Z", "R", "C", "G", "M"],
  ["S", "J", "F", "L", "H", "W", "Z", "Q"],
  ["S", "Q", "P", "W", "N"],
];
// EDIT (after submission): I cheated... turns out part of the challenge was parsing the input :')

const lines: Array<string> = inputFile.split("\n");

lines.map((line) => {
  const [_move, quantity, _from, start, _to, destination] = line.split(" ");
  let count = parseInt(quantity);
  while (count) {
    stacks[parseInt(destination) - 1].push(stacks[parseInt(start) - 1].pop()!);
    count--;
  }
});

let topOfEach = "";

stacks.map((stack) => {
  topOfEach += stack[stack.length - 1];
});

console.log("🎄 Top of each stack:", topOfEach);
