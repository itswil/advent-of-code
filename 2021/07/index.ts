export const getLeastFuelRequired = (input: string): number => {
  const inputArray = input.split(",").map((value) => parseInt(value, 10));
  const max = Math.max(...inputArray);
  const min = Math.min(...inputArray);

  let fuelRequired = [];

  for (let target = min; target <= max; target++) {
    let tempTotal = 0;
    for (const num of inputArray) {
      tempTotal += Math.abs(num - target);
    }
    fuelRequired.push(tempTotal);
  }

  return Math.min(...fuelRequired);
};

const getTriangleNumber = (num: number): number => (num * num + num) / 2;

export const getLeastFuelRequiredV2 = (input: string): number => {
  const inputArray = input.split(",").map((value) => parseInt(value, 10));
  const max = Math.max(...inputArray);
  const min = Math.min(...inputArray);

  let fuelRequired = [];

  for (let target = min; target <= max; target++) {
    let tempTotal = 0;
    for (const num of inputArray) {
      tempTotal += getTriangleNumber(Math.abs(num - target));
    }
    fuelRequired.push(tempTotal);
  }

  return Math.min(...fuelRequired);
};
