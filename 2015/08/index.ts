export const getInMemoryStringLength = (str: string): number => {
  let length = 0;
  let pointer = 0;
  const strWithoutQuotes = str.slice(1, str.length - 1);

  while (pointer < strWithoutQuotes.length) {
    const currentChar = strWithoutQuotes[pointer];

    if (currentChar === "\\") {
      const nextChar = strWithoutQuotes[pointer + 1];

      if (nextChar === "\\") {
        length++;
        pointer = pointer + 2;
      } else if (nextChar === `"`) {
        length++;
        pointer = pointer + 2;
      } else if (nextChar === `x`) {
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

export const getEncodedStringLength = (str: string): number => {
  let length = 0;

  for (const currentChar of str) {
    if (currentChar === `"`) {
      length = length + 2;
    } else if (currentChar === "\\") {
      length = length + 2;
    } else {
      length = length + 1;
    }
  }
  length = length + 2; // for the outer "" quotes

  return length;
};

export const getStringLengthDifferenceV2 = (input: string): number => {
  const strs = input.split("\n");
  const lengths: Array<[number, number]> = [];

  for (const str of strs) {
    lengths.push([str.length, getEncodedStringLength(str)]);
  }

  const totalStringLength = lengths.reduce((a, c) => a + c[0], 0);
  const totalEncodedStringLength = lengths.reduce((a, c) => a + c[1], 0);

  return totalEncodedStringLength - totalStringLength;
};
