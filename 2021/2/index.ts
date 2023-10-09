export const getHorizontalDepthValue = (input: string) => {
  let horizontalPosition = 0;
  let depth = 0;

  for (const line of input.split("\n")) {
    const [direction, distance] = line.split(" ");

    if (direction === "forward") {
      horizontalPosition += parseInt(distance);
    } else if (direction === "down") {
      depth += parseInt(distance);
    } else if (direction === "up") {
      depth -= parseInt(distance);
    }
  }

  return horizontalPosition * depth;
};

export const getHorizontalDepthValue2 = (input: string) => {
  let horizontalPosition = 0;
  let depth = 0;
  let aim = 0;

  for (const line of input.split("\n")) {
    const [direction, distanceString] = line.split(" ");
    const distance = parseInt(distanceString);

    if (direction === "forward") {
      horizontalPosition += distance;
      depth += aim * distance;
    } else if (direction === "down") {
      aim += distance;
    } else if (direction === "up") {
      aim -= distance;
    }
  }

  return horizontalPosition * depth;
};
