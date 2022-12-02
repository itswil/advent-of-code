import fs from "fs";
import readline from "readline";

const inputStream = fs.createReadStream("./2022/2/input.txt");
const lineReader = readline.createInterface({
  input: inputStream,
  // output: process.stdout,
  console: false,
});

const CHOICE = {
  ROCK: {
    values: ["A", "X"],
    score: 1,
  },
  PAPER: {
    values: ["B", "Y"],
    score: 2,
  },
  SCISSORS: {
    values: ["C", "Z"],
    score: 3,
  },
};
const RESULT_SCORE = {
  WIN: 6,
  LOSE: 0,
  DRAW: 3,
};
let score = 0;

lineReader.on("line", (line) => {
  const [opponentChoice, myChoice] = line.split(" ");

  if (
    (CHOICE.ROCK.values.includes(opponentChoice) &&
      CHOICE.ROCK.values.includes(myChoice)) ||
    (CHOICE.PAPER.values.includes(opponentChoice) &&
      CHOICE.PAPER.values.includes(myChoice)) ||
    (CHOICE.SCISSORS.values.includes(opponentChoice) &&
      CHOICE.SCISSORS.values.includes(myChoice))
  ) {
    if (CHOICE.ROCK.values.includes(opponentChoice)) {
      score += CHOICE.ROCK.score;
    } else if (CHOICE.PAPER.values.includes(opponentChoice)) {
      score += CHOICE.PAPER.score;
    } else if (CHOICE.SCISSORS.values.includes(opponentChoice)) {
      score += CHOICE.SCISSORS.score;
    }
    score += RESULT_SCORE.DRAW;
  } else if (CHOICE.ROCK.values.includes(opponentChoice)) {
    if (CHOICE.PAPER.values.includes(myChoice)) {
      score += CHOICE.PAPER.score + RESULT_SCORE.WIN;
    } else if (CHOICE.SCISSORS.values.includes(myChoice)) {
      score += CHOICE.SCISSORS.score + RESULT_SCORE.LOSE;
    }
  } else if (CHOICE.PAPER.values.includes(opponentChoice)) {
    if (CHOICE.SCISSORS.values.includes(myChoice)) {
      score += CHOICE.SCISSORS.score + RESULT_SCORE.WIN;
    } else if (CHOICE.ROCK.values.includes(myChoice)) {
      score += CHOICE.ROCK.score + RESULT_SCORE.LOSE;
    }
  } else if (CHOICE.SCISSORS.values.includes(opponentChoice)) {
    if (CHOICE.ROCK.values.includes(myChoice)) {
      score += CHOICE.ROCK.score + RESULT_SCORE.WIN;
    } else if (CHOICE.PAPER.values.includes(myChoice)) {
      score += CHOICE.PAPER.score + RESULT_SCORE.LOSE;
    }
  }
});

lineReader.on("close", () => {
  console.log("🎄 Score:", score);
});
