const hasLToRDecrease = (num: number): boolean => {
  const numArray = num.toString().split("");

  for (let i = 0; i < numArray.length - 1; i++) {
    const nextNum = parseInt(numArray[i + 1], 10);
    const currentNum = parseInt(numArray[i], 10);
    if (nextNum < currentNum) {
      return true;
    }
  }

  return false;
};

const hasTwoAdjacentMatchingDigits = (num: number): boolean => {
  let hasTwoAdjacentMatchingDigits = false;
  const numArray = num.toString().split("");

  for (let i = 0; i < numArray.length - 1; i++) {
    const nextNum = parseInt(numArray[i + 1], 10);
    const currentNum = parseInt(numArray[i], 10);
    if (nextNum === currentNum) {
      hasTwoAdjacentMatchingDigits = true;
      break;
    }
  }

  return hasTwoAdjacentMatchingDigits;
};

const hasTwoAdjacentMatchingUniqueDigits = (num: number): boolean => {
  const matchingDigits: Record<number, number> = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };
  const numArray = num.toString().split("");

  for (let i = 0; i < numArray.length - 1; i++) {
    const nextNum = parseInt(numArray[i + 1], 10);
    const currentNum = parseInt(numArray[i], 10);
    if (nextNum === currentNum) {
      matchingDigits[currentNum] = matchingDigits[currentNum] + 1;
    }
  }

  for (const digit in matchingDigits) {
    if (matchingDigits[digit] === 1) {
      return true;
    }
  }
  return false;
};

export const getNumberOfPasswords = (
  numStart: number,
  numEnd: number
): number => {
  let validPasswordCount = 0;
  for (let i = numStart; i <= numEnd; i++) {
    if (hasLToRDecrease(i)) {
      continue;
    }

    if (!hasTwoAdjacentMatchingDigits(i)) {
      continue;
    }

    validPasswordCount++;
  }

  return validPasswordCount;
};

export const getNumberOfPasswordsStrict = (
  numStart: number,
  numEnd: number
): number => {
  let validPasswordCount = 0;
  for (let i = numStart; i <= numEnd; i++) {
    if (hasLToRDecrease(i)) {
      continue;
    }

    if (!hasTwoAdjacentMatchingUniqueDigits(i)) {
      continue;
    }

    validPasswordCount++;
  }

  return validPasswordCount;
};
