export const checkBoard = (
  board: Array<Array<number>>,
  drawnNumbers: Array<number>
): Array<number> | false => {
  const h = board.length;

  // scan columns
  for (let i = 0; i < h; i++) {
    if (board[i].every((number) => drawnNumbers.includes(number))) {
      return board.flat().filter((number) => !drawnNumbers.includes(number));
    }
  }

  // scan rows
  for (let i = 0; i < h; i++) {
    if (board.every((row) => drawnNumbers.includes(row[i]))) {
      return board.flat().filter((number) => !drawnNumbers.includes(number));
    }
  }

  return false;
};

export const getWinningBoardFinalScore = (input: string): number => {
  const [numbers, ...boards] = input.split("\n\n");
  const numbersArray = numbers.split(",");
  const boardsArray = boards.map((board) =>
    board
      .trim()
      .replaceAll("  ", " ")
      .replaceAll("\n ", "\n")
      .split("\n")
      .map((row) => row.split(" ").map((number) => parseInt(number)))
  );

  const drawnNumbers = [];

  for (const number of numbersArray) {
    const latestNumber = parseInt(number);

    drawnNumbers.push(latestNumber);

    for (const board of boardsArray) {
      const unmarkedNumbersOrFalse = checkBoard(board, drawnNumbers);
      if (unmarkedNumbersOrFalse) {
        return unmarkedNumbersOrFalse.reduce((a, c) => a + c, 0) * latestNumber;
      }
    }
  }

  return 0;
};

export const getLosingBoardFinalScore = (input: string): number => {
  const [numbers, ...boards] = input.split("\n\n");
  const numbersArray = numbers.split(",");
  const boardsArray = boards.map((board) =>
    board
      .trim()
      .replaceAll("  ", " ")
      .replaceAll("\n ", "\n")
      .split("\n")
      .map((row) => row.split(" ").map((number) => parseInt(number)))
  );

  const drawnNumbers = [];
  let winningBoards = new Set();

  for (const number of numbersArray) {
    const latestNumber = parseInt(number);

    drawnNumbers.push(latestNumber);

    let boardIndex = 0;
    for (const board of boardsArray) {
      const unmarkedNumbersOrFalse = checkBoard(board, drawnNumbers);
      if (unmarkedNumbersOrFalse) {
        winningBoards.add(boardIndex);

        if (winningBoards.size === boardsArray.length) {
          return (
            unmarkedNumbersOrFalse.reduce((a, c) => a + c, 0) * latestNumber
          );
        }
      }
      boardIndex++;
    }
  }

  return 0;
};
