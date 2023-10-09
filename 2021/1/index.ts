export const getNumberOfIncrements = (input: string): number => {
  let increased = 0;
  let previousValue = 0;
  const array = input.split("\n");

  for (const line of array) {
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

  const array = input.split("\n");

  for (const line of array) {
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
