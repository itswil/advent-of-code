export const getWrappingPaperArea = (dimensions: string): number => {
  const [w, l, h] = dimensions.split("x").map(Number);
  const smallestSide = Math.min(...[l * w, w * h, h * l]);

  return 2 * l * w + 2 * w * h + 2 * h * l + smallestSide;
};

export const getTotalWrappingPaperArea = (input: string): number => {
  const dimensionsArray = input.split("\n");
  const allAreas = dimensionsArray.map((d) => getWrappingPaperArea(d));

  return allAreas.reduce((a, c) => a + c, 0);
};

export const getRibbonLength = (dimensions: string): number => {
  const [w, l, h] = dimensions
    .split("x")
    .map(Number)
    .sort((a, b) => a - b);
  const bowLength = w * l * h;
  const smallestPerimeter = 2 * w + 2 * l;

  return bowLength + smallestPerimeter;
};

export const getTotalRibbonLength = (input: string): number => {
  const dimensionsArray = input.split("\n");
  const allLengths = dimensionsArray.map((d) => getRibbonLength(d));

  return allLengths.reduce((a, c) => a + c, 0);
};
