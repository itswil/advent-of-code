export const getHighestTotalCalories = (input: string): number => {
  const arrayTotals = [];
  const arrayTemp = [];

  for (const line of input.split("\n")) {
    if (isNaN(parseInt(line))) {
      arrayTotals.push(arrayTemp.reduce((a, b) => a + b, 0));
      arrayTemp.length = 0;
    } else {
      arrayTemp.push(parseInt(line));
    }
  }

  return Math.max(...arrayTotals);
};

export const getHighestTotalCaloriesForTop3Elves = (input: string): number => {
  const arrayTotals = [];
  const arrayTemp = [];

  for (const line of input.split("\n")) {
    if (isNaN(parseInt(line))) {
      arrayTotals.push(arrayTemp.reduce((a, b) => a + b, 0));
      arrayTemp.length = 0;
    } else {
      arrayTemp.push(parseInt(line));
    }
  }

  return arrayTotals
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b, 0);
};
