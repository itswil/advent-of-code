export const getPowerConsumption = (input: string): number => {
  const array = input.split("\n");
  const count = [
    ...Array(array[0].length)
      .fill(0)
      .map(() => ({ 0: 0, 1: 0 })),
  ];

  for (const line of array) {
    for (let i = 0; i < line.length; i++) {
      if (line[i] === "0") {
        count[i][0]++;
      } else {
        count[i][1]++;
      }
    }
  }

  const gammaRate = [];
  const epsilonRate = [];

  for (const row of count) {
    if (row[0] > row[1]) {
      gammaRate.push(0);
      epsilonRate.push(1);
    } else {
      gammaRate.push(1);
      epsilonRate.push(0);
    }
  }

  return parseInt(gammaRate.join(""), 2) * parseInt(epsilonRate.join(""), 2);
};

const getOxygenRating = (array: Array<string>): string => {
  let clone = [...array];

  for (let i = 0; i < clone[0].length; i++) {
    if (clone.length === 1) {
      break;
    }
    let zeroes = [];
    let ones = [];

    for (let j = 0; j < clone.length; j++) {
      if (clone[j][i] === "0") {
        zeroes.push(clone[j]);
      } else {
        ones.push(clone[j]);
      }
    }

    if (ones.length >= zeroes.length) {
      clone = [...ones];
    } else {
      clone = [...zeroes];
    }
  }

  return clone[0];
};

const getCarbonDioxideRating = (array: Array<string>): string => {
  let clone = [...array];

  for (let i = 0; i < clone[0].length; i++) {
    if (clone.length === 1) {
      break;
    }
    let zeroes = [];
    let ones = [];

    for (let j = 0; j < clone.length; j++) {
      if (clone[j][i] === "0") {
        zeroes.push(clone[j]);
      } else {
        ones.push(clone[j]);
      }
    }

    if (zeroes.length <= ones.length) {
      clone = [...zeroes];
    } else {
      clone = [...ones];
    }
  }

  return clone[0];
};

export const getLifeSupportRating = (input: string): number => {
  const array = input.split("\n");

  const o2Rating = getOxygenRating(array);
  const co2Rating = getCarbonDioxideRating(array);

  return parseInt(o2Rating, 2) * parseInt(co2Rating, 2);
};
