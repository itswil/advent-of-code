type Coord = Array<number>;

const goUp = (c: Coord): Coord => [c[0], c[1] + 1];
const goDown = (c: Coord): Coord => [c[0], c[1] - 1];
const goRight = (c: Coord): Coord => [c[0] + 1, c[1]];
const goLeft = (c: Coord): Coord => [c[0] - 1, c[1]];

export const getCoordsForWirePath = (path: string): Array<Coord> => {
  const coords = [[0, 0]];
  const actions = path.split(",");

  for (const action of actions) {
    const direction = action[0];
    let distance = Number(action.slice(1));
    let goDirection = goUp;

    if (direction === "R") {
      goDirection = goRight;
    } else if (direction === "L") {
      goDirection = goLeft;
    } else if (direction === "D") {
      goDirection = goDown;
    }

    while (distance > 0) {
      coords.push(goDirection(coords.at(-1)!));
      distance--;
    }
  }

  return coords;
};

export const getWireCrossCoords = (
  path1: Array<Coord>,
  path2: Array<Coord>
): Array<Coord> => {
  const path1Stringified = path1.map((c) => c.toString());
  const path2Stringified = path2.map((c) => c.toString());

  const intersections = path1Stringified.filter((c) =>
    path2Stringified.includes(c)
  );

  return intersections.map((c) => {
    const [x, y] = c.split(",");
    return [Number(x), Number(y)];
  });
};

// Works for small sets of data only
export const getClosestIntersection = (input: string): number => {
  const [wire1, wire2] = input.split("\n");

  const path1 = getCoordsForWirePath(wire1);
  const path2 = getCoordsForWirePath(wire2);

  const crossCoords = getWireCrossCoords(path1, path2);

  crossCoords.shift(); // remove [0,0]

  const crossCoordSums = crossCoords!.map(
    (c: Coord) => Math.abs(c[0]) + Math.abs(c[1])
  );

  return Math.min(...crossCoordSums);
};
