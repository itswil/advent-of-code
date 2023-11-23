const DIRECTION = {
  N: "N",
  E: "E",
  S: "S",
  W: "W",
} as const;

export const getDestinationDistance = (input: string): number => {
  const moves = input.split(", ");
  const position = [0, 0];
  let currentDirection: (typeof DIRECTION)[keyof typeof DIRECTION] =
    DIRECTION.N;

  for (const move of moves) {
    const turn = move.at(0);
    const distance = Number(move.slice(1));

    switch (currentDirection) {
      case DIRECTION.N:
        if (turn === "R") {
          currentDirection = DIRECTION.E;
          position[0] = position[0] + distance;
        } else {
          currentDirection = DIRECTION.W;
          position[0] = position[0] - distance;
        }
        break;
      case DIRECTION.E:
        if (turn === "R") {
          currentDirection = DIRECTION.S;
          position[1] = position[1] - distance;
        } else {
          currentDirection = DIRECTION.N;
          position[1] = position[1] + distance;
        }
        break;
      case DIRECTION.S:
        if (turn === "R") {
          currentDirection = DIRECTION.W;
          position[0] = position[0] - distance;
        } else {
          currentDirection = DIRECTION.E;
          position[0] = position[0] + distance;
        }
        break;
      case DIRECTION.W:
        if (turn === "R") {
          currentDirection = DIRECTION.N;
          position[1] = position[1] + distance;
        } else {
          currentDirection = DIRECTION.S;
          position[1] = position[1] - distance;
        }
        break;
    }
  }

  return position.reduce((a, c) => Math.abs(a) + Math.abs(c), 0);
};

const checkForIntersection = (
  positions: Array<string>,
  newPosition: Array<number>
) => {
  if (positions.includes(newPosition.toString())) {
    return newPosition.reduce((a, c) => Math.abs(a) + Math.abs(c), 0);
  }

  return -1;
};

export const getIntersectionDistance = (input: string): number => {
  const moves = input.split(", ");
  const positions = ["0,0"];
  let currentDirection: (typeof DIRECTION)[keyof typeof DIRECTION] =
    DIRECTION.N;

  for (const move of moves) {
    const turn = move.at(0);
    let lastPosition = positions.at(-1)!.split(",").map(Number);
    let distance = Number(move.slice(1));

    switch (currentDirection) {
      case DIRECTION.N:
        if (turn === "R") {
          currentDirection = DIRECTION.E;
          while (distance) {
            lastPosition = [lastPosition[0] + 1, lastPosition[1]];
            const hasIntersection = checkForIntersection(
              positions,
              lastPosition
            );
            if (hasIntersection > 0) {
              return hasIntersection;
            }
            positions.push(lastPosition.toString());
            distance--;
          }
        } else {
          currentDirection = DIRECTION.W;
          while (distance) {
            lastPosition = [lastPosition[0] - 1, lastPosition[1]];
            const hasIntersection = checkForIntersection(
              positions,
              lastPosition
            );
            if (hasIntersection > 0) {
              return hasIntersection;
            }
            positions.push(lastPosition.toString());
            distance--;
          }
        }
        break;
      case DIRECTION.E:
        if (turn === "R") {
          currentDirection = DIRECTION.S;
          while (distance) {
            lastPosition = [lastPosition[0], lastPosition[1] - 1];
            const hasIntersection = checkForIntersection(
              positions,
              lastPosition
            );
            if (hasIntersection > 0) {
              return hasIntersection;
            }
            positions.push(lastPosition.toString());
            distance--;
          }
        } else {
          currentDirection = DIRECTION.N;
          while (distance) {
            lastPosition = [lastPosition[0], lastPosition[1] + 1];
            const hasIntersection = checkForIntersection(
              positions,
              lastPosition
            );
            if (hasIntersection > 0) {
              return hasIntersection;
            }
            positions.push(lastPosition.toString());
            distance--;
          }
        }
        break;
      case DIRECTION.S:
        if (turn === "R") {
          currentDirection = DIRECTION.W;
          while (distance) {
            lastPosition = [lastPosition[0] - 1, lastPosition[1]];
            const hasIntersection = checkForIntersection(
              positions,
              lastPosition
            );
            if (hasIntersection > 0) {
              return hasIntersection;
            }
            positions.push(lastPosition.toString());
            distance--;
          }
        } else {
          currentDirection = DIRECTION.E;
          while (distance) {
            lastPosition = [lastPosition[0] + 1, lastPosition[1]];
            const hasIntersection = checkForIntersection(
              positions,
              lastPosition
            );
            if (hasIntersection > 0) {
              return hasIntersection;
            }
            positions.push(lastPosition.toString());
            distance--;
          }
        }
        break;
      case DIRECTION.W:
        if (turn === "R") {
          currentDirection = DIRECTION.N;
          while (distance) {
            lastPosition = [lastPosition[0], lastPosition[1] + 1];
            const hasIntersection = checkForIntersection(
              positions,
              lastPosition
            );
            if (hasIntersection > 0) {
              return hasIntersection;
            }
            positions.push(lastPosition.toString());
            distance--;
          }
        } else {
          currentDirection = DIRECTION.S;
          while (distance) {
            lastPosition = [lastPosition[0], lastPosition[1] - 1];
            const hasIntersection = checkForIntersection(
              positions,
              lastPosition
            );
            if (hasIntersection > 0) {
              return hasIntersection;
            }
            positions.push(lastPosition.toString());
            distance--;
          }
        }
        break;
    }
  }

  return -1;
};
