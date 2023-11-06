export const getFloor = (input: string): number => {
  let floor = 0;

  for (const char of input) {
    if (char === "(") {
      floor++;
      continue;
    } else if (char === ")") {
      floor--;
      continue;
    }
  }

  return floor;
};

export const getPositionOnEnteringBasement = (input: string): number => {
  let floor = 0;
  let position = 0;

  for (const char of input) {
    position++;

    if (char === "(") {
      floor++;
      continue;
    } else if (char === ")") {
      floor--;

      if (floor === -1) {
        break;
      }

      continue;
    }
  }

  return position;
};
