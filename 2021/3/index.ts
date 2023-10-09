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
