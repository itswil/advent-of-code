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

const getStartPositions = (nodes: Record<string, string>): Array<string> =>
  Object.keys(nodes).filter((position) => position.at(-1) === "A");

export const isAllEndInZ = (currentPositions: Array<string>): boolean =>
  currentPositions.filter((pos) => pos.at(-1) === "Z").length ===
  currentPositions.length;

// This does not complete in any reasonable time
const getNumberOfStepsV2_BruteForce = (input: string): number => {
  let steps = 0;
  let pointer = 0;
  const [instructions, network] = input.split("\n\n");
  const nodes: Record<string, string> = Object.fromEntries(
    network
      .split("\n")
      .map((node) => node.replace("(", "").replace(")", "").split(" = "))
  );
  let currentPositions = getStartPositions(nodes);

  while (!isAllEndInZ(currentPositions)) {
    if (instructions[pointer] === "L") {
      currentPositions.forEach(
        (pos, index, array) => (array[index] = nodes[pos].slice(0, 3))
      );
    } else {
      currentPositions.forEach(
        (pos, index, array) => (array[index] = nodes[pos].slice(-3))
      );
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

export const getLowestCommonMultiple = (numbers: Array<number>): number => {
  const sortedNumbers = numbers.toSorted();
  const biggestNumber = sortedNumbers.pop()!;
  let multiple = 1;
  let isCommonMultiple = true;

  while (true) {
    const target = biggestNumber * multiple;

    for (const num of sortedNumbers) {
      if (target % num !== 0) {
        isCommonMultiple = false;
        break;
      }
    }

    if (isCommonMultiple) {
      return target;
    }

    multiple++;
    isCommonMultiple = true;
  }
};

export const getNumberOfStepsV2 = (input: string): number => {
  const [instructions, network] = input.split("\n\n");
  const nodes: Record<string, string> = Object.fromEntries(
    network
      .split("\n")
      .map((node) => node.replace("(", "").replace(")", "").split(" = "))
  );
  let startPositions = getStartPositions(nodes);
  let steps = Array(startPositions.length).fill(0);

  startPositions.forEach((position, index) => {
    let currentPosition = position;
    let pointer = 0;
    while (currentPosition.at(-1) !== "Z") {
      if (instructions[pointer] === "L") {
        currentPosition = nodes[currentPosition].slice(0, 3);
      } else {
        currentPosition = nodes[currentPosition].slice(-3);
      }

      steps[index]++;
      if (pointer === instructions.length - 1) {
        pointer = 0;
      } else {
        pointer++;
      }
    }
  });

  return getLowestCommonMultiple(steps);
};
