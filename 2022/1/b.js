import fs from "fs";
import readline from "readline";

const inputStream = fs.createReadStream("./2022/1/input.txt");
const lineReader = readline.createInterface({
  input: inputStream,
  // output: process.stdout,
  console: false,
});

const arrayTotals = [];
const arrayTemp = [];

lineReader.on("line", (line) => {
  if (isNaN(parseInt(line))) {
    arrayTotals.push(arrayTemp.reduce((a, b) => a + b, 0));
    arrayTemp.length = 0;
  } else {
    arrayTemp.push(parseInt(line));
  }
});

lineReader.on("close", () => {
  console.log(
    "🎄 Highest calorie count of top 3:",
    arrayTotals
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((a, b) => a + b, 0)
  );
});
