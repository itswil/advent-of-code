export const getNumberOfContainedAssignmentPairs = (input: string): number => {
  let count = 0;

  for (const line of input.split("\n")) {
    const [rangeCode1, rangeCode2] = line.split(",");
    const [start1, end1] = rangeCode1.split("-");
    const [start2, end2] = rangeCode2.split("-");

    const startInt1 = parseInt(start1);
    const endInt1 = parseInt(end1);
    const startInt2 = parseInt(start2);
    const endInt2 = parseInt(end2);

    if (startInt1 >= startInt2 && endInt1 <= endInt2) {
      count++;
    } else if (startInt1 <= startInt2 && endInt1 >= endInt2) {
      count++;
    }
  }

  return count;
};

export const getNumberOfOverlappingAssignmentPairs = (
  input: string
): number => {
  let count = 0;

  for (const line of input.split("\n")) {
    const [rangeCode1, rangeCode2] = line.split(",");
    const [start1, end1] = rangeCode1.split("-");
    const [start2, end2] = rangeCode2.split("-");

    const startInt1 = parseInt(start1);
    const endInt1 = parseInt(end1);
    const startInt2 = parseInt(start2);
    const endInt2 = parseInt(end2);

    if (
      (startInt1 >= startInt2 && startInt1 <= endInt2) ||
      (endInt1 >= startInt2 && endInt1 <= endInt2)
    ) {
      count++;
    } else if (
      (startInt2 >= startInt1 && startInt2 <= endInt1) ||
      (endInt2 >= startInt1 && endInt2 <= endInt1)
    ) {
      count++;
    }
  }

  return count;
};
