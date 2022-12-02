import fs from "fs";
import readline from "readline";

const inputStream = fs.createReadStream("./2022/2/input.txt");
const lineReader = readline.createInterface({
  input: inputStream,
  // output: process.stdout,
  console: false,
});

// A for Rock, B for Paper, and C for Scissors

const FLOW = {
  A: {
    X: {
      choice: "C",
      score: 0,
      choiceScore: 3,
    },
    Y: {
      choice: "A",
      score: 3,
      choiceScore: 1,
    },
    Z: {
      choice: "B",
      score: 6,
      choiceScore: 2,
    },
  },
  B: {
    X: {
      choice: "A",
      score: 0,
      choiceScore: 1,
    },
    Y: {
      choice: "B",
      score: 3,
      choiceScore: 2,
    },
    Z: {
      choice: "C",
      score: 6,
      choiceScore: 3,
    },
  },
  C: {
    X: {
      choice: "B",
      score: 0,
      choiceScore: 2,
    },
    Y: {
      choice: "C",
      score: 3,
      choiceScore: 3,
    },
    Z: {
      choice: "A",
      score: 6,
      choiceScore: 1,
    },
  },
};
let score = 0;

lineReader.on("line", (line) => {
  const [opponentChoice, outcome] = line.split(" ");
  const decisionPath = FLOW[opponentChoice][outcome];
  score += decisionPath.score + decisionPath.choiceScore;
});

lineReader.on("close", () => {
  console.log("🎄 Score:", score);
});
