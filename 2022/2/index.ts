export const getTotalScore = (input: string): number => {
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

  for (const line of input.split("\n")) {
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
  }

  return score;
};

export const getTotalScore2 = (input: string): number => {
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

  for (const line of input.split("\n")) {
    const [opponentChoice, myChoice] = line.split(" ");
    const decisionPath = FLOW[opponentChoice][myChoice];
    score += decisionPath.score + decisionPath.choiceScore;
  }

  return score;
};

export const getTotalScoreForTopSecretStrategy = (input: string): number => {
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

  for (const line of input.split("\n")) {
    const [opponentChoice, outcome] = line.split(" ");
    const decisionPath = FLOW[opponentChoice][outcome];
    score += decisionPath.score + decisionPath.choiceScore;
  }

  return score;
};
