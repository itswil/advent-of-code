export const getWinningNumbers = (
  selected: Array<number>,
  myNumbers: Array<number>
): Array<number> => {
  const winningNumbers = [];

  for (const number of myNumbers) {
    if (selected.includes(number)) {
      winningNumbers.push(number);
    }
  }

  return winningNumbers;
};

export const calculateScore = (numberOfMatches: number) => {
  if (numberOfMatches === 0) {
    return 0;
  }
  if (numberOfMatches === 1) {
    return 1;
  }

  return 2 ** (numberOfMatches - 1);
};

export const getScatchcardScore = (input: string): number => {
  const cards = input.split("\n");
  const winningNumbers = [];

  for (const card of cards) {
    const [selectedStr, myNumbersStr] = card.split(": ")[1].split(" | ");
    const selected = selectedStr
      .split(" ")
      .filter(Boolean)
      .map((numberStr) => parseInt(numberStr, 10));
    const myNumbers = myNumbersStr
      .split(" ")
      .filter(Boolean)
      .map((numberStr) => parseInt(numberStr, 10));

    winningNumbers.push(getWinningNumbers(selected, myNumbers));
  }

  return winningNumbers
    .map((numbers) => calculateScore(numbers.length))
    .reduce((a, c) => a + c, 0);
};

export const getNumberOfScratchcardsWon = (input: string) => {
  const cards = input.split("\n");
  const cardsWon: Array<number> = [];

  cards.forEach((card, index) => {
    const [selectedStr, myNumbersStr] = card.split(": ")[1].split(" | ");
    const selected = selectedStr
      .split(" ")
      .filter(Boolean)
      .map((numberStr) => parseInt(numberStr, 10));
    const myNumbers = myNumbersStr
      .split(" ")
      .filter(Boolean)
      .map((numberStr) => parseInt(numberStr, 10));

    const numberOfCardsWon = getWinningNumbers(selected, myNumbers).length;
    const currentGame = index + 1;
    let numberOfCurrentGameCards = cardsWon.filter(
      (card) => card === currentGame
    ).length;

    while (numberOfCurrentGameCards + 1) {
      for (let i = 1; i <= numberOfCardsWon; i++) {
        cardsWon.push(currentGame + i);
      }

      numberOfCurrentGameCards--;
    }
  });

  return cards.length + cardsWon.length;
};
