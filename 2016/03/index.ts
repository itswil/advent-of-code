const isPossibleTriangle = (a: number, b: number, c: number): boolean => {
  if (!(a + b > c)) {
    return false;
  } else if (!(b + c > a)) {
    return false;
  } else if (!(a + c > b)) {
    return false;
  }

  return true;
};

export const getNumberOfPossibleTriangles = (input: string): number => {
  let numPossibleTriangles = 0;
  const triangles = input.split("\n");

  for (const triangle of triangles) {
    const [a, b, c] = triangle.trim().split(/\s+/).map(Number);

    if (!isPossibleTriangle(a, b, c)) {
      continue;
    }

    numPossibleTriangles++;
  }

  return numPossibleTriangles;
};

export const getNumberOfPossibleTrianglesV2 = (input: string): number => {
  let numPossibleTriangles = 0;
  const triangles = input.split("\n");

  for (let i = 0; i < triangles.length; i = i + 3) {
    const [a1, b1, c1] = triangles[i].trim().split(/\s+/).map(Number);
    const [a2, b2, c2] = triangles[i + 1].trim().split(/\s+/).map(Number);
    const [a3, b3, c3] = triangles[i + 2].trim().split(/\s+/).map(Number);

    if (isPossibleTriangle(a1, a2, a3)) {
      numPossibleTriangles++;
    }
    if (isPossibleTriangle(b1, b2, b3)) {
      numPossibleTriangles++;
    }
    if (isPossibleTriangle(c1, c2, c3)) {
      numPossibleTriangles++;
    }
  }

  return numPossibleTriangles;
};
