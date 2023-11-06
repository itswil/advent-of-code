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

// extremely slow
const getIntersectionsV1 = (
  paths1: Array<string>,
  paths2: Array<string>
): Array<string> => paths1.filter((c) => paths2.includes(c));

// no difference
const getIntersectionsV2 = (
  paths1: Array<string>,
  paths2: Array<string>
): Array<string> => {
  const intersections = [];
  for (const coord of paths1) {
    if (paths2.includes(coord)) {
      intersections.push(coord);
    }
  }
  return intersections;
};

// fast
const getIntersectionsV3 = (
  paths1: Array<string>,
  paths2: Array<string>
): Array<string> => {
  const intersections = [];
  const paths2Set = new Set(paths2);
  for (const coord of paths1) {
    if (paths2Set.has(coord)) {
      intersections.push(coord);
    }
  }
  return intersections;
};

// Performance: Slicing path1Stringified and path2Stringified to 50k
// V1: 18s
// V2: 18s
// V3: 27ms

export const getWireCrossCoords = (
  path1: Array<Coord>,
  path2: Array<Coord>
): Array<Coord> => {
  const path1Stringified = path1.map((c) => c.toString());
  const path2Stringified = path2.map((c) => c.toString());

  const intersections = getIntersectionsV3(path1Stringified, path2Stringified);

  return intersections.map((c) => {
    const [x, y] = c.split(",");
    return [Number(x), Number(y)];
  });
};

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
