export const getAccumulatorValue = (input: string): number => {
  const lines = input.split("\n");
  const indexStack: Array<number> = [];
  let index = 0;
  let accumulator = 0;

  while (index < lines.length) {
    if (indexStack.includes(index)) {
      return accumulator;
    }

    indexStack.push(index);

    const [operation, value] = lines[index].split(" ");

    if (operation === "nop") {
      index++;
    } else if (operation === "acc") {
      accumulator = accumulator + Number(value);
      index++;
    } else if (operation === "jmp") {
      index = index + Number(value);
    }
  }

  return 0;
};

const getAccumulatorValueOnTerminationOnly = (
  lines: Array<string>
): number | null => {
  const indexStack: Array<number> = [];
  let index = 0;
  let accumulator = 0;

  while (index < lines.length) {
    if (indexStack.includes(index)) {
      return null;
    }

    indexStack.push(index);

    const [operation, value] = lines[index].split(" ");

    if (operation === "nop") {
      index++;
    } else if (operation === "acc") {
      accumulator = accumulator + Number(value);
      index++;
    } else if (operation === "jmp") {
      index = index + Number(value);
    }
  }

  return accumulator;
};

export const getAccumulatorValueOnTermination = (input: string): number => {
  const lines = input.split("\n");
  const jmpIndexes = [];
  const nopIndexes = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("jmp")) {
      jmpIndexes.push(i);
    } else if (line.startsWith("nop")) {
      nopIndexes.push(i);
    }
  }

  for (const index of jmpIndexes) {
    const clone = [...lines];
    clone[index] = "nop " + clone[index].split(" ")[1];
    const accumulator = getAccumulatorValueOnTerminationOnly(clone);

    if (accumulator) {
      return accumulator;
    }
  }

  for (const index of nopIndexes) {
    const clone = [...lines];
    clone[index] = "jmp " + clone[index].split(" ")[1];
    const accumulator = getAccumulatorValueOnTerminationOnly(clone);

    if (accumulator) {
      return accumulator;
    }
  }
};
