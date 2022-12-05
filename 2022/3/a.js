import fs from "fs";
import readline from "readline";

const inputStream = fs.createReadStream("./2022/3/input.txt");
const lineReader = readline.createInterface({
  input: inputStream,
  // output: process.stdout,
  console: false,
});

const getDuplicatedChar = (str1, str2) => {
  const str1Arr = str1.split("");
  const str2Arr = str2.split("");
  const duplicatedChar = str1Arr.filter((char) => str2Arr.includes(char));
  return new Set(duplicatedChar);
};

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const duplicates = [];

lineReader.on("line", (line) => {
  const half1 = line.slice(0, line.length / 2);
  const half2 = line.slice(line.length / 2);

  duplicates.push(...getDuplicatedChar(half1, half2));
});

lineReader.on("close", () => {
  const sumPriorities = duplicates.reduce(
    (acc, char) => acc + alphabet.indexOf(char) + 1,
    0
  );
  console.log("🎄 Priority sum:", sumPriorities);
});
