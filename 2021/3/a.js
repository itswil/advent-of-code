import fs from "fs";
import readline from "readline";

const inputStream = fs.createReadStream("./2021/3/input.txt");
const lineReader = readline.createInterface({
  input: inputStream,
  // output: process.stdout,
  console: false,
});

const count = [
  ...Array(12)
    .fill(0)
    .map((x) => ({ 0: 0, 1: 0 })),
];

lineReader.on("line", (line) => {
  for (let i = 0; i < line.length; i++) {
    if (line[i] === "0") {
      count[i][0]++;
    } else {
      count[i][1]++;
    }
  }
});

lineReader.on("close", () => {
  const gammaRate = [];
  const epsilonRate = [];

  for (const row of count) {
    if (row[0] > row[1]) {
      gammaRate.push(0);
      epsilonRate.push(1);
    } else {
      gammaRate.push(1);
      epsilonRate.push(0);
    }
  }

  console.log(
    "🎄 Power consumption:",
    parseInt(gammaRate.join(""), 2) * parseInt(epsilonRate.join(""), 2)
  );
});
