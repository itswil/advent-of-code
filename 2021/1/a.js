import fs from "fs";
import readline from "readline";

const inputStream = fs.createReadStream("./2021/1/input.txt");
const lineReader = readline.createInterface({
  input: inputStream,
  // output: process.stdout,
  console: false,
});

let increased = 0;
let decreased = 0;
let previousValue = 0;

lineReader.on("line", (line) => {
  if (previousValue) {
    parseInt(line) > previousValue && increased++;
  }

  previousValue = parseInt(line);
});

lineReader.on("close", () => {
  console.log("🎄 Number of increments:", increased);
});
