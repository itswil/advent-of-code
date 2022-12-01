import fs from "fs";
import readline from "readline";

const inputStream = fs.createReadStream("./2021/2/input.txt");
const lineReader = readline.createInterface({
  input: inputStream,
  // output: process.stdout,
  console: false,
});

let horizontalPosition = 0;
let depth = 0;
let aim = 0;

lineReader.on("line", (line) => {
  const [direction, distanceString] = line.split(" ");
  const distance = parseInt(distanceString);

  if (direction === "forward") {
    horizontalPosition += distance;
    depth += aim * distance;
  } else if (direction === "down") {
    aim += distance;
    // depth += distance;
  } else if (direction === "up") {
    aim -= distance;
    // depth -= distance;
  }
});

lineReader.on("close", () => {
  console.log("🎄 Final depth:", horizontalPosition * depth);
});
