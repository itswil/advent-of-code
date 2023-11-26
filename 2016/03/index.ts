export const getNumberOfPossibleTriangles = (input: string): number => {
  let numPossibleTriangles = 0;
  const triangles = input.split("\n");

  for (const triangle of triangles) {
    const [a, b, c] = triangle.trim().split(/\s+/).map(Number);

    if (!(a + b > c)) {
      continue;
    } else if (!(b + c > a)) {
      continue;
    } else if (!(a + c > b)) {
      continue;
    }

    numPossibleTriangles++;
  }

  return numPossibleTriangles;
};
