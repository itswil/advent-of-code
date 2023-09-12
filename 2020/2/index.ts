export const getNumberOfValidPasswords = (input: string): number => {
  let numberOfValidPasswords = 0;
  const lines: Array<string> = input.split("\n");

  lines.forEach((line) => {
    let letterCount = 0;
    const [min, max, letter, password] = line
      .replace("-", " ")
      .replace(":", "")
      .split(" ");

    for (const char of password) {
      if (char === letter) {
        letterCount++;
      }
    }

    if (letterCount >= Number(min) && letterCount <= Number(max)) {
      numberOfValidPasswords++;
    }
  });

  return numberOfValidPasswords;
};

export const getNumberOfValidPasswordsPartTwo = (input: string) => {
  let numberOfValidPasswords = 0;
  const lines: Array<string> = input.split("\n");

  lines.forEach((line) => {
    const [min, max, letter, password] = line
      .replace("-", " ")
      .replace(":", "")
      .split(" ");

    if (
      (password[Number(min) - 1] === letter &&
        password[Number(max) - 1] !== letter) ||
      (password[Number(min) - 1] !== letter &&
        password[Number(max) - 1] === letter)
    ) {
      numberOfValidPasswords++;
    }
  });

  return numberOfValidPasswords;
};
