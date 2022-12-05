import fs from "fs";
import readline from "readline";

const inputStream = fs.createReadStream("./2022/3/input.txt");
const lineReader = readline.createInterface({
  input: inputStream,
  // output: process.stdout,
  console: false,
});

const getDuplicatedChar = (str1, str2, str3) => {
  const str1Arr = str1.split("");
  const str2Arr = str2.split("");
  const str3Arr = str3.split("");
  const duplicatedChar1 = str1Arr.filter((char) => str2Arr.includes(char));
  const duplicatedChar2 = str1Arr.filter((char) => str3Arr.includes(char));
  const duplicatedChar3 = str2Arr.filter((char) => str3Arr.includes(char));
  const commonChar = duplicatedChar1.filter(
    (char) => duplicatedChar2.includes(char) && duplicatedChar3.includes(char)
  );
  return new Set(commonChar);
};

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const duplicates = [];
const batchOfThree = [];

lineReader.on("line", (line) => {
  batchOfThree.push(line);

  if (batchOfThree.length === 3) {
    const [str1, str2, str3] = batchOfThree;
    const commonChar = getDuplicatedChar(str1, str2, str3);
    duplicates.push(...commonChar);
    batchOfThree.length = 0;
  }
});

lineReader.on("close", () => {
  const sumPriorities = duplicates.reduce(
    (acc, char) => acc + alphabet.indexOf(char) + 1,
    0
  );
  console.log("🎄 Priority sum:", sumPriorities);
});
