export const getMessage = (input: string): string => {
  let errorCorrectedMessage = "";
  const codes = input.split("\n");

  for (let i = 0; i < codes[0].length; i++) {
    const letters: Record<string, number> = {};

    for (let j = 0; j < codes.length; j++) {
      const newLetter = codes[j][i];

      if (letters[newLetter]) {
        letters[newLetter] += 1;
      } else {
        letters[newLetter] = 1;
      }
    }

    const sortedLetters = Object.entries(letters).sort((a, b) => b[1] - a[1]);
    errorCorrectedMessage += sortedLetters[0][0];
  }

  return errorCorrectedMessage;
};

export const getMessageV2 = (input: string): string => {
  let errorCorrectedMessage = "";
  const codes = input.split("\n");

  for (let i = 0; i < codes[0].length; i++) {
    const letters: Record<string, number> = {};

    for (let j = 0; j < codes.length; j++) {
      const newLetter = codes[j][i];

      if (letters[newLetter]) {
        letters[newLetter] += 1;
      } else {
        letters[newLetter] = 1;
      }
    }

    const sortedLetters = Object.entries(letters).sort((a, b) => a[1] - b[1]);
    errorCorrectedMessage += sortedLetters[0][0];
  }

  return errorCorrectedMessage;
};
