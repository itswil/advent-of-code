export const getPositionZeroValue = (
  inputString: string,
  swap1: number | null,
  swap2: number | null
): number => {
  const input = inputString.split(",").map(Number);
  if (swap1 !== null && swap2 !== null) {
    input[1] = swap1;
    input[2] = swap2;
  }

  for (let i = 0; i < input.length; i = i + 4) {
    if (input[i] === 99) {
      // halt
      return input[0];
    } else if (input[i] === 1) {
      // add operation
      input[input[i + 3]] = input[input[i + 1]] + input[input[i + 2]];
    } else if (input[i] === 2) {
      // multiply
      input[input[i + 3]] = input[input[i + 1]] * input[input[i + 2]];
    }
  }

  return 0;
};

export const getNounVerbAnswer = (input: string): number => {
  const target = 19690720;
  let answer = 0;

  for (let n = 0; n < 100; n++) {
    for (let v = 0; v < 100; v++) {
      if (getPositionZeroValue(input, n, v) === target) {
        answer = 100 * n + v;
      }
    }
  }

  return answer;
};
