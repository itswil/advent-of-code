export const getWinningStrategyProduct = (input: string): number => {
  const [unformattedTimes, unformattedDistances] = input.split("\n");
  const times = unformattedTimes
    .split(":")[1]
    .split(" ")
    .filter((s) => s !== "")
    .map((s) => parseInt(s, 10));
  const distances = unformattedDistances
    .split(":")[1]
    .split(" ")
    .filter((s) => s !== "")
    .map((s) => parseInt(s, 10));
  let winningStrategies = Array(times.length).fill(0);

  for (let i = 0; i < times.length; i++) {
    const time = times[i];
    const distance = distances[i];

    for (let j = 1; j < time; j++) {
      if (j === time) {
        continue;
      }
      const holdTime = j;
      const speed = j;

      const distanceTravelled = (time - holdTime) * speed;

      if (distanceTravelled > distance) {
        winningStrategies[i]++;
      }
    }
  }

  return winningStrategies.reduce((a, c) => a * c, 1);
};
