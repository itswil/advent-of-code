const POSITION_START = "AAA";
const POSITION_END = "ZZZ";

export const getNumberOfSteps = (input: string): number => {
  let steps = 0;
  let pointer = 0;
  let currentPosition = POSITION_START;
  const [instructions, network] = input.split("\n\n");
  const nodes = Object.fromEntries(
    network
      .split("\n")
      .map((node) => node.replace("(", "").replace(")", "").split(" = "))
  );

  while (currentPosition !== POSITION_END) {
    if (instructions[pointer] === "L") {
      currentPosition = nodes[currentPosition].slice(0, 3);
    } else {
      currentPosition = nodes[currentPosition].slice(-3);
    }

    steps++;
    if (pointer === instructions.length - 1) {
      pointer = 0;
    } else {
      pointer++;
    }
  }

  return steps;
};
