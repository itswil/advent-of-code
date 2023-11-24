type Coordinates = [number, number];

const DIRECTION = {
  UP: "U",
  DOWN: "D",
  LEFT: "L",
  RIGHT: "R",
} as const;

const KEYPAD_MAP = [
  [7, 8, 9],
  [4, 5, 6],
  [1, 2, 3],
];

export const convertToKeypadValues = (
  coords: Array<Coordinates>,
  map: Array<Array<number | string | null>>
): string => {
  let values = "";

  for (const coord of coords) {
    values += map[coord[1]][coord[0]];
  }

  return values;
};

const updatePosition = (
  coord: Coordinates,
  direction: (typeof DIRECTION)[keyof typeof DIRECTION]
): Coordinates => {
  let newCoord: Coordinates = coord;

  if (direction === DIRECTION.UP) {
    if (coord[1] < 2) {
      newCoord = [coord[0], coord[1] + 1];
    }
  } else if (direction === DIRECTION.DOWN) {
    if (coord[1] > 0) {
      newCoord = [coord[0], coord[1] - 1];
    }
  } else if (direction === DIRECTION.LEFT) {
    if (coord[0] > 0) {
      newCoord = [coord[0] - 1, coord[1]];
    }
  } else if (direction === DIRECTION.RIGHT) {
    if (coord[0] < 2) {
      newCoord = [coord[0] + 1, coord[1]];
    }
  }

  return newCoord;
};

export const getBathroomCode = (input: string): string => {
  const sequences = input.split("\n");
  let finalCoords: Array<Coordinates> = [];
  let start: Coordinates = [1, 1];

  for (const sequence of sequences) {
    let position = start;
    for (const move of sequence) {
      position = updatePosition(
        position,
        move as (typeof DIRECTION)[keyof typeof DIRECTION]
      );
    }
    start = position;
    finalCoords.push(position);
  }

  return convertToKeypadValues(finalCoords, KEYPAD_MAP).toString();
};

const X = null;
const A = "A";
const B = "B";
const C = "C";
const D = "D";
const KEYPAD_MAP_V2 = [
  [X, X, D, X, X],
  [X, A, B, C, X],
  [5, 6, 7, 8, 9],
  [X, 2, 3, 4, X],
  [X, X, 1, X, X],
];

const tryGetKeypadValue = (x: number, y: number) => {
  let value;
  try {
    value = KEYPAD_MAP_V2[y][x];
  } catch {
    return false;
  }

  return value;
};

const updatePositionV2 = (
  coord: Coordinates,
  direction: (typeof DIRECTION)[keyof typeof DIRECTION]
): Coordinates => {
  let newCoord: Coordinates = coord;

  if (direction === DIRECTION.UP) {
    if (tryGetKeypadValue(coord[0], coord[1] + 1)) {
      newCoord = [coord[0], coord[1] + 1];
    }
  } else if (direction === DIRECTION.DOWN) {
    if (tryGetKeypadValue(coord[0], coord[1] - 1)) {
      newCoord = [coord[0], coord[1] - 1];
    }
  } else if (direction === DIRECTION.LEFT) {
    if (tryGetKeypadValue(coord[0] - 1, coord[1])) {
      newCoord = [coord[0] - 1, coord[1]];
    }
  } else if (direction === DIRECTION.RIGHT) {
    if (tryGetKeypadValue(coord[0] + 1, coord[1])) {
      newCoord = [coord[0] + 1, coord[1]];
    }
  }

  return newCoord;
};

export const getBathroomCodeV2 = (input: string): string => {
  const sequences = input.split("\n");
  let finalCoords: Array<Coordinates> = [];
  let start: Coordinates = [0, 2];

  for (const sequence of sequences) {
    let position = start;
    for (const move of sequence) {
      position = updatePositionV2(
        position,
        move as (typeof DIRECTION)[keyof typeof DIRECTION]
      );
    }
    start = position;
    finalCoords.push(position);
  }

  return convertToKeypadValues(finalCoords, KEYPAD_MAP_V2).toString();
};
