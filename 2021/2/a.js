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

lineReader.on("line", (line) => {
  const [direction, distance] = line.split(" ");

  if (direction === "forward") {
    horizontalPosition += parseInt(distance);
  } else if (direction === "down") {
    depth += parseInt(distance);
  } else if (direction === "up") {
    depth -= parseInt(distance);
  }
});

lineReader.on("close", () => {
  console.log("🎄 Final depth:", horizontalPosition * depth);
});
