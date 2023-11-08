const getCoordinates = (input: string): Array<Array<number>> => {
  const coordinates = [[0, 0]];

  for (const char of input) {
    const previous = coordinates.at(-1)!;
    if (char === "^") {
      coordinates.push([previous[0], previous[1] + 1]);
    } else if (char === "v") {
      coordinates.push([previous[0], previous[1] - 1]);
    } else if (char === ">") {
      coordinates.push([previous[0] + 1, previous[1]]);
    } else if (char === "<") {
      coordinates.push([previous[0] - 1, previous[1]]);
    }
  }

  return coordinates;
};

export const getNumberOfHouses = (input: string): number => {
  const coordinates = getCoordinates(input);
  const uniqueCoordinates = new Set(coordinates.map((c) => c.toString()));

  return uniqueCoordinates.size;
};

export const getNumberOfHousesV2 = (input: string): number => {
  let route1 = "";
  let route2 = "";

  for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
      route1 += input[i];
    } else {
      route2 += input[i];
    }
  }

  const coordinates1 = getCoordinates(route1);
  const coordinates2 = getCoordinates(route2);
  const allCoordinates = coordinates1.concat(coordinates2);
  const uniqueCoordinates = new Set(allCoordinates.map((c) => c.toString()));

  return uniqueCoordinates.size;
};
