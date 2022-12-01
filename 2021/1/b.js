import fs from "fs";
import readline from "readline";

const inputStream = fs.createReadStream("./2021/1/input.txt");
const lineReader = readline.createInterface({
  input: inputStream,
  // output: process.stdout,
  console: false,
});

let increased = 0;
let previousPreviousValue = 0;
let previousValue = 0;
const values = [];

lineReader.on("line", (line) => {
  // Generate rolling sum array
  if (previousPreviousValue && previousValue && parseInt(line)) {
    values.push(previousPreviousValue + previousValue + parseInt(line));
  }

  // Update trailing values
  previousPreviousValue = previousValue;
  previousValue = parseInt(line);
});

lineReader.on("close", () => {
  for (let i = 1; i < values.length; i++) {
    if (values[i] > values[i - 1]) {
      increased++;
    }
  }
  console.log("🎄 Number of increments:", increased);
});
