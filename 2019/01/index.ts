export const getFuelRequirementsSum = (input: string): number =>
  input.split("\n").reduce((a, c) => a + Math.floor(Number(c) / 3) - 2, 0);

const recursiveAdd = (mass: number): number => {
  const fuelRequired = Math.floor(mass / 3) - 2;

  if (fuelRequired > 6) {
    return fuelRequired + recursiveAdd(fuelRequired);
  }

  return fuelRequired;
};

export const getFuelRequirementsSumRecursively = (input: string): number => {
  let totalFuelRequired = 0;
  const lines = input.split("\n");

  for (const line of lines) {
    totalFuelRequired += recursiveAdd(parseInt(line));
  }

  return totalFuelRequired;
};
