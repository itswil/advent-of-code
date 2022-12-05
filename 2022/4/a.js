import fs from "fs";
import readline from "readline";

const inputStream = fs.createReadStream("./2022/4/input.txt");
const lineReader = readline.createInterface({
  input: inputStream,
  // output: process.stdout,
  console: false,
});

let count = 0;

lineReader.on("line", (line) => {
  const [rangeCode1, rangeCode2] = line.split(",");
  const [start1, end1] = rangeCode1.split("-");
  const [start2, end2] = rangeCode2.split("-");

  const startInt1 = parseInt(start1);
  const endInt1 = parseInt(end1);
  const startInt2 = parseInt(start2);
  const endInt2 = parseInt(end2);

  if (startInt1 >= startInt2 && endInt1 <= endInt2) {
    count++;
  } else if (startInt1 <= startInt2 && endInt1 >= endInt2) {
    count++;
  }
});

lineReader.on("close", () => {
  console.log("🎄 Count string inclues:", count);
});
