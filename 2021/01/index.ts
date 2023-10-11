export const getNumberOfIncrements = (input: string): number => {
  let increased = 0;
  let previousValue = 0;

  for (const line of input.split("\n")) {
    if (previousValue) {
      parseInt(line) > previousValue && increased++;
    }

    previousValue = parseInt(line);
  }

  return increased;
};

export const getNumberOfSumIncrements = (input: string): number => {
  let increased = 0;
  let previousPreviousValue = 0;
  let previousValue = 0;
  const values = [];

  for (const line of input.split("\n")) {
    // Generate rolling sum array
    if (previousPreviousValue && previousValue && parseInt(line)) {
      values.push(previousPreviousValue + previousValue + parseInt(line));
    }

    // Update trailing values
    previousPreviousValue = previousValue;
    previousValue = parseInt(line);
  }

  for (let i = 1; i < values.length; i++) {
    if (values[i] > values[i - 1]) {
      increased++;
    }
  }

  return increased;
};
