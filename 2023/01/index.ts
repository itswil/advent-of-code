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
    const lastDigit = getLastDigit(line);

    values.push(parseInt(firstDigit + lastDigit, 10));
  }

  return values.reduce((a, c) => a + c, 0);
};

const NUMBERS = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
} as const;

const getFirstNumber = (code: string): keyof typeof NUMBERS => {
  let savedIndex;
  let numberFound: keyof typeof NUMBERS;
  for (const number of Object.keys(NUMBERS)) {
    const indexOfNumber = code.indexOf(number);
    if (indexOfNumber >= 0) {
      if (savedIndex === undefined) {
        numberFound = number as keyof typeof NUMBERS;
        savedIndex = indexOfNumber;
      } else if (indexOfNumber < savedIndex) {
        numberFound = number as keyof typeof NUMBERS;
        savedIndex = indexOfNumber;
      }
    }
  }

  return numberFound!;
};

const getLastNumber = (code: string): keyof typeof NUMBERS => {
  let savedIndex;
  let numberFound: keyof typeof NUMBERS;
  for (const number of Object.keys(NUMBERS)) {
    const lastIndexOfNumber = code.lastIndexOf(number);
    if (lastIndexOfNumber >= 0) {
      if (savedIndex === undefined) {
        numberFound = number as keyof typeof NUMBERS;
        savedIndex = lastIndexOfNumber;
      } else if (lastIndexOfNumber > savedIndex) {
        numberFound = number as keyof typeof NUMBERS;
        savedIndex = lastIndexOfNumber;
      }
    }
  }

  return numberFound!;
};

export const getCalibrationValueSumV2 = (input: string): number => {
  const values = [];
  const lines = input.split("\n");

  for (const line of lines) {
    const firstDigit = getFirstDigit(line);
    const lastDigit = getLastDigit(line);
    const firstNumber = getFirstNumber(line);
    const lastNumber = getLastNumber(line);

    let first;
    let last;

    if (
      (firstDigit && line.indexOf(firstDigit) < line.indexOf(firstNumber)) ||
      !firstNumber
    ) {
      first = firstDigit;
    } else {
      first = NUMBERS[firstNumber];
    }

    if (
      (lastDigit &&
        line.lastIndexOf(lastDigit) > line.lastIndexOf(lastNumber)) ||
      !lastNumber
    ) {
      last = lastDigit;
    } else {
      last = NUMBERS[lastNumber];
    }

    values.push(parseInt(first + last, 10));
  }

  return values.reduce((a, c) => a + c, 0);
};
