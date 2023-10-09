export const convertCratesInputIntoStacksArray = (
  crates: string
): Array<Array<string>> => {
  let numStacks = 0;
  let cratesArray = [];

  for (const line of crates.split("\n")) {
    if (line.startsWith(" 1 ")) {
      const lastNumber = line.replaceAll(" ", "").slice(-1);
      numStacks = parseInt(lastNumber);
      break;
    }
    cratesArray.unshift(line);
  }

  let stacks: Array<Array<string>> = Array(numStacks)
    .fill(0)
    .map(() => []);

  for (let i = 0; i < cratesArray.length; i++) {
    for (let j = 0; j < cratesArray[i].length; j = j + 4) {
      const crate = cratesArray[i].substring(j, j + 3);
      if (crate === "   ") {
      } else {
        const crateLetter = crate
          .replaceAll("[", "")
          .replace("]", "")
          .replace(" ", "");
        stacks[(j + 4) / 4 - 1].push(crateLetter);
      }
    }
  }

  return stacks;
};

export const getCrates = (input: string): string => {
  const [crates, instructions] = input.split("\n\n");
  const stacks = convertCratesInputIntoStacksArray(crates);

  for (const line of instructions.split("\n")) {
    const [_move, quantity, _from, start, _to, destination] = line.split(" ");
    let count = parseInt(quantity);
    while (count) {
      stacks[parseInt(destination) - 1].push(
        stacks[parseInt(start) - 1].pop()!
      );
      count--;
    }
  }

  let topOfEach = "";

  stacks.map((stack) => {
    topOfEach += stack[stack.length - 1];
  });

  return topOfEach;
};

export const getCratesWithCrateMover9001 = (input: string): string => {
  const [crates, instructions] = input.split("\n\n");
  const stacks = convertCratesInputIntoStacksArray(crates);

  for (const line of instructions.split("\n")) {
    const [_move, quantity, _from, start, _to, destination] = line.split(" ");
    let count = parseInt(quantity);
    const temporaryStore: Array<string> = [];
    while (count) {
      temporaryStore.push(stacks[parseInt(start) - 1].pop()!);
      count--;
    }
    stacks[parseInt(destination) - 1].push(...temporaryStore.reverse());
    temporaryStore.length = 0;
  }

  let topOfEach = "";

  stacks.map((stack) => {
    topOfEach += stack[stack.length - 1];
  });

  return topOfEach;
};
