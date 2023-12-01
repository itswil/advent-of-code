const getFirstDigit = (code: string): string => {
  for (let i = 0; i < code.length; i++) {
    const parsedNumber = parseInt(code[i], 10);
    if (parsedNumber) {
      return code[i];
    }
  }

  return "";
};

const getLastDigit = (code: string): string => {
  for (let i = code.length; i >= 0; i--) {
    const parsedNumber = parseInt(code[i], 10);
    if (parsedNumber) {
      return code[i];
    }
  }

  return "";
};

export const getCalibrationValueSum = (input: string): number => {
  const values = [];
  const lines = input.split("\n");

  for (const line of lines) {
    const firstDigit = getFirstDigit(line);
    console.log("🚀 ~ getCalibrationValueSum ~ firstDigit:", firstDigit);
    const lastDigit = getLastDigit(line);
    console.log("🚀 ~ getCalibrationValueSum ~ lastDigit:", lastDigit);

    values.push(parseInt(firstDigit + lastDigit, 10));
  }

  return values.reduce((a, c) => a + c, 0);
};
