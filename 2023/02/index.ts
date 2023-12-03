type Round = {
  blue?: number;
  green?: number;
  red?: number;
};
type RoundKeys = keyof Round;
type Game = Array<Round>;
type Games = Array<Game>;

const LIMIT = {
  blue: 14,
  green: 13,
  red: 12,
};

export const convertToGamesArray = (input: string) => {
  const array: Games = [];
  const games = input.split("\n");

  for (const game of games) {
    array.push([]);
    const id = parseInt(game.split(": ")[0].split(" ")[1], 10) - 1;
    const rounds = game.split(": ")[1].split("; ");

    rounds.forEach((round, index) => {
      array[id].push({});
      const roundFormatted = round.split(", ");

      for (const cubes of roundFormatted) {
        const number = parseInt(cubes.split(" ")[0], 10);
        const color = cubes.split(" ")[1] as RoundKeys;

        array[id][index][color] = number;
      }
    });
  }

  return array;
};

export const getPossibleGamesIdSum = (input: string): number => {
  const games = convertToGamesArray(input);
  const possibleGamesIds: Array<number> = [];

  games.forEach((game, index) => {
    let allRoundsPossible = true;
    for (const gameRound of game) {
      const rounds = Object.entries(gameRound) as Array<[RoundKeys, number]>;

      rounds.forEach((round) => {
        if (round[1] > LIMIT[round[0]]) {
          allRoundsPossible = false;
        }
      });
    }

    if (allRoundsPossible) {
      possibleGamesIds.push(index + 1);
    }
  });

  return possibleGamesIds.reduce((a, c) => a + c, 0);
};

export const getMinimumCubesMultiple = (input: string): number => {
  const games = convertToGamesArray(input);

  const powers: Array<number> = [];

  games.forEach((game) => {
    let minBlue = 0;
    let minGreen = 0;
    let minRed = 0;

    for (const round of game) {
      for (const cube in round) {
        const numberOfCubes = round[cube as RoundKeys];
        if (!numberOfCubes) {
          continue;
        }

        if (cube === "blue") {
          if (numberOfCubes > minBlue) {
            minBlue = numberOfCubes;
          }
        } else if (cube === "green") {
          if (numberOfCubes > minGreen) {
            minGreen = numberOfCubes;
          }
        } else if (cube === "red") {
          if (numberOfCubes > minRed) {
            minRed = numberOfCubes;
          }
        }
      }
    }

    powers.push(minBlue * minGreen * minRed);
  });

  return powers.reduce((a, c) => a + c, 0);
};
