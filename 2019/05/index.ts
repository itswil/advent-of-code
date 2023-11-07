const ROW_MAX = 128;
const COL_MAX = 8;

export const getRow = (code: Array<string>, rows: Array<number>): number => {
  const char = code.shift();

  if (code.length === 0) {
    if (char === "F") {
      return rows[0];
    } else {
      return rows[1];
    }
  }

  if (char === "F") {
    return getRow(code, rows.slice(0, rows.length / 2));
  } else {
    return getRow(code, rows.slice(rows.length / 2));
  }
};

export const getColumn = (
  code: Array<string>,
  columns: Array<number>
): number => {
  const char = code.shift();

  if (code.length === 0) {
    if (char === "L") {
      return columns[0];
    } else {
      return columns[1];
    }
  }

  if (char === "L") {
    return getColumn(code, columns.slice(0, columns.length / 2));
  } else {
    return getColumn(code, columns.slice(columns.length / 2));
  }
};

export const getSeatId = (boardingPass: string): number => {
  const rowCode = boardingPass.slice(0, 7).split("");
  const columnCode = boardingPass.slice(7).split("");

  const rows = [...Array(ROW_MAX).keys()];
  const columns = [...Array(COL_MAX).keys()];

  const row = getRow(rowCode, rows);
  const column = getColumn(columnCode, columns);

  return row * 8 + column;
};

export const getHighestSeatId = (input: string): number => {
  const boardingPasses = input.split("\n");
  const seatIds = boardingPasses.map((pass) => getSeatId(pass));

  return Math.max(...seatIds);
};

export const getMissingSeatIds = (input: string): Array<number> => {
  const boardingPasses = input.split("\n");
  const seatIds = boardingPasses.map((pass) => getSeatId(pass));
  const seatIdsSet = new Set(seatIds);
  const highestSeatId = Math.max(...seatIds);
  const missingSeatIds = [];

  for (let i = 0; i < highestSeatId; i++) {
    if (!seatIdsSet.has(i)) {
      missingSeatIds.push(i);
    }
  }

  return missingSeatIds;
};
