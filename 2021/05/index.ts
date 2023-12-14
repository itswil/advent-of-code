const getMaxGridSize = (input: string): [number, number] => {
  const coordinates = input
    .replaceAll(" -> ", "\n")
    .split("\n")
    .map((c) => [parseInt(c.split(",")[0]), parseInt(c.split(",")[1])]);
  const allX = coordinates.map((c) => c[0]);
  const allY = coordinates.map((c) => c[1]);

  return [Math.max(...allX), Math.max(...allY)];
};

const drawHorizontal = (
  grid: Array<Array<number>>,
  from: [number, number],
  to: [number, number]
) => {
  for (let i = from[0]; i <= to[0]; i++) {
    grid[from[1]][i]++;
  }

  return grid;
};

const drawVertical = (
  grid: Array<Array<number>>,
  from: [number, number],
  to: [number, number]
) => {
  for (let i = from[1]; i <= to[1]; i++) {
    grid[i][from[0]]++;
  }

  return grid;
};

export const getNumberOfCrossOverPoints = (input: string): number => {
  const lines = input.split("\n").map((line) => line.split(" -> "));
  const [maxX, maxY] = getMaxGridSize(input);
  let grid: Array<Array<number>> = Array(maxX + 1)
    .fill(0)
    .map(() => Array(maxY + 1).fill(0));

  for (const line of lines) {
    const [aX, aY] = line[0].split(",").map((n) => parseInt(n));
    const [bX, bY] = line[1].split(",").map((n) => parseInt(n));

    if (aX !== bX && aY !== bY) {
      continue;
    }

    let fromX = aX;
    let fromY = aY;
    let toX = bX;
    let toY = bY;

    if (aX > bX || aY > bY) {
      fromX = bX;
      fromY = bY;
      toX = aX;
      toY = aY;
    }

    if (Math.abs(toX - fromX) !== 0) {
      grid = drawHorizontal(grid, [fromX, fromY], [toX, toY]);
    } else if (Math.abs(toY - fromY) !== 0) {
      grid = drawVertical(grid, [fromX, fromY], [toX, toY]);
    }
  }

  return grid.flat().filter((value) => value >= 2).length;
};

const drawDiagonalUp = (
  grid: Array<Array<number>>,
  from: [number, number],
  to: [number, number]
) => {
  const length = to[0] - from[0];
  for (let i = 0; i <= length; i++) {
    grid[from[1] + i][from[0] + i]++;
  }

  return grid;
};

const drawDiagonalDown = (
  grid: Array<Array<number>>,
  from: [number, number],
  to: [number, number]
) => {
  const length = from[1] - to[1];
  for (let i = 0; i <= length; i++) {
    grid[from[1] - i][from[0] + i]++;
  }

  return grid;
};

export const getNumberOfCrossOverPointsV2 = (input: string): number => {
  const lines = input.split("\n").map((line) => line.split(" -> "));
  const [maxX, maxY] = getMaxGridSize(input);
  let grid: Array<Array<number>> = Array(maxX + 1)
    .fill(0)
    .map(() => Array(maxY + 1).fill(0));

  for (const line of lines) {
    const [aX, aY] = line[0].split(",").map((n) => parseInt(n));
    const [bX, bY] = line[1].split(",").map((n) => parseInt(n));

    let fromX = aX;
    let fromY = aY;
    let toX = bX;
    let toY = bY;

    if (aX > bX || aY > bY) {
      fromX = bX;
      fromY = bY;
      toX = aX;
      toY = aY;
    }
    if (aX < bX && aY < bY) {
      drawDiagonalUp(grid, [aX, aY], [bX, bY]);
    } else if (aX > bX && aY > bY) {
      drawDiagonalUp(grid, [bX, bY], [aX, aY]);
    } else if (aX < bX && aY > bY) {
      drawDiagonalDown(grid, [aX, aY], [bX, bY]);
    } else if (aX > bX && aY < bY) {
      drawDiagonalDown(grid, [bX, bY], [aX, aY]);
    } else if (Math.abs(toX - fromX) !== 0) {
      grid = drawHorizontal(grid, [fromX, fromY], [toX, toY]);
    } else if (Math.abs(toY - fromY) !== 0) {
      grid = drawVertical(grid, [fromX, fromY], [toX, toY]);
    }
  }

  return grid.flat().filter((value) => value >= 2).length;
};
