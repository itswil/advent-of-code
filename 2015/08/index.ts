export const getInMemoryStringLength = (str: string): number => {
  let length = 0;
  let pointer = 0;
  const strWithoutQuotes = str.slice(1, str.length - 1);

  while (pointer < strWithoutQuotes.length) {
    const currentChar = strWithoutQuotes[pointer];

    if (currentChar === "\\") {
      if (strWithoutQuotes[pointer + 1] === "\\") {
        length++;
        pointer = pointer + 2;
      } else if (strWithoutQuotes[pointer + 1] === `"`) {
        length++;
        pointer = pointer + 2;
      } else if (strWithoutQuotes[pointer + 1] === `x`) {
        length++;
        pointer = pointer + 4;
      }
    } else {
      length++;
      pointer = pointer + 1;
    }
  }

  return length;
};

export const getStringLengthDifference = (input: string): number => {
  const strs = input.split("\n");
  const lengths: Array<[number, number]> = [];

  for (const str of strs) {
    lengths.push([str.length, getInMemoryStringLength(str)]);
  }

  const totalStringLength = lengths.reduce((a, c) => a + c[0], 0);
  const totalInMemoryStringLength = lengths.reduce((a, c) => a + c[1], 0);

  return totalStringLength - totalInMemoryStringLength;
};
