export function getHighestCalories(input: string) {
  const totals: Array<number> = [];
  const temp: Array<number> = [];

  input.split("\n").forEach((line) => {
    if (line === "") {
      totals.push(temp.reduce((a, b) => a + b, 0));
      temp.length = 0;
    } else {
      temp.push(parseInt(line));
    }
  });

  return Math.max(...totals);
}
