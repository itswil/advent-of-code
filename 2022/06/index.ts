export const getNumberOfCharsUntilMarker = (input: string): number => {
  let numberOfMarkers = 0;
  const markers = [];

  for (let i = 3; i < input.length; i++) {
    markers.push(input[i - 3]);
    markers.push(input[i - 2]);
    markers.push(input[i - 1]);
    markers.push(input[i]);

    if (new Set(markers).size === 4) {
      numberOfMarkers = i + 1;
      break;
    }

    markers.length = 0;
  }

  return numberOfMarkers;
};

export const getNumberOfCharsUntilMarkerPart2 = (input: string): number => {
  let numberOfMarkers = 0;
  const markers = [];

  for (let i = 13; i < input.length; i++) {
    markers.push(input[i - 13]);
    markers.push(input[i - 12]);
    markers.push(input[i - 11]);
    markers.push(input[i - 10]);
    markers.push(input[i - 9]);
    markers.push(input[i - 8]);
    markers.push(input[i - 7]);
    markers.push(input[i - 6]);
    markers.push(input[i - 5]);
    markers.push(input[i - 4]);
    markers.push(input[i - 3]);
    markers.push(input[i - 2]);
    markers.push(input[i - 1]);
    markers.push(input[i]);

    if (new Set(markers).size === 14) {
      numberOfMarkers = i + 1;
      break;
    }

    markers.length = 0;
  }

  return numberOfMarkers;
};
