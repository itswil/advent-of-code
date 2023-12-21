export const getGeneratedText = (input: string, iterations: number): string => {
  let str = input;
  let generatedText = "";

  while (iterations > 0) {
    const tally: Array<[string, number]> = [];

    for (const char of str) {
      if (tally.length === 0) {
        tally.push([char, 1]);
      } else if (char === tally.at(-1)![0]) {
        tally.at(-1)![1]++;
      } else if (char !== tally.at(-1)![0]) {
        tally.push([char, 1]);
      }
    }

    iterations--;
    generatedText = tally.reduce((a, c) => a + c[1] + c[0], "");
    str = generatedText;
  }

  return generatedText;
};

export const getGeneratedTextRecursive = (
  input: string,
  iterations: number
): string => {
  if (iterations === 0) {
    return input;
  }

  const tally: Array<[string, number]> = [];

  for (const char of input) {
    if (tally.length === 0) {
      tally.push([char, 1]);
    } else if (char === tally.at(-1)![0]) {
      tally.at(-1)![1]++;
    } else if (char !== tally.at(-1)![0]) {
      tally.push([char, 1]);
    }
  }

  return getGeneratedTextRecursive(
    tally.reduce((a, c) => a + c[1] + c[0], ""),
    iterations - 1
  );
};
