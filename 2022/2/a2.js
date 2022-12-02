import fs from "fs";
import readline from "readline";

const inputStream = fs.createReadStream("./2022/2/input.txt");
const lineReader = readline.createInterface({
  input: inputStream,
  // output: process.stdout,
  console: false,
});

/*
A X ROCK
Score 1

B Y PAPER
Score 2

C Z SCISSORS
Score 3

Win 6
Lose 0
Draw 3

Final 13675
*/

const FLOW = {
  A: {
    X: {
      score: 3,
      choiceScore: 1,
    },
    Y: {
      score: 6,
      choiceScore: 2,
    },
    Z: {
      score: 0,
      choiceScore: 3,
    },
  },
  B: {
    X: {
      score: 0,
      choiceScore: 1,
    },
    Y: {
      score: 3,
      choiceScore: 2,
    },
    Z: {
      score: 6,
      choiceScore: 3,
    },
  },
  C: {
    X: {
      score: 6,
      choiceScore: 1,
    },
    Y: {
      score: 0,
      choiceScore: 2,
    },
    Z: {
      score: 3,
      choiceScore: 3,
    },
  },
};
let score = 0;

lineReader.on("line", (line) => {
  const [opponentChoice, myChoice] = line.split(" ");
  const decisionPath = FLOW[opponentChoice][myChoice];
  score += decisionPath.score + decisionPath.choiceScore;
});

lineReader.on("close", () => {
  console.log("🎄 Score:", score);
});
