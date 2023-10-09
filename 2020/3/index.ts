export const getNumberOfTrees = (input: string): number => {
  let numberOfTrees = 0;
  const landArray = input.split("\n");

  for (let i = 1; i < landArray.length; i++) {
    if (landArray[i][(i * 3) % landArray[i].length] === "#") {
      numberOfTrees++;
    }
  }

  return numberOfTrees;
};

const analyseMap = (
  landArray: Array<string>,
  right: number,
  down: number
): number => {
  let numberOfTrees = 0;

  for (let i = 1, j = down; j < landArray.length; i++, j = j + down) {
    if (landArray[j][(i * right) % landArray[j].length] === "#") {
      numberOfTrees++;
    }
  }

  return numberOfTrees;
};

export const getNumberOfTreesFromMaps = (input: string): number => {
  const landArray = input.split("\n");

  return [
    analyseMap(landArray, 1, 1),
    analyseMap(landArray, 3, 1),
    analyseMap(landArray, 5, 1),
    analyseMap(landArray, 7, 1),
    analyseMap(landArray, 1, 2),
  ].reduce((a, b) => a * b);
};
