export const isRealRoom = (encryptedName: string): boolean => {
  const [former, latter] = encryptedName.split("[");
  const checksum = latter.replace("]", "");
  const letters = former.split("-").slice(0, -1).join("");
  const count: Record<string, number> = {};

  for (const letter of letters) {
    if (count[letter]) {
      count[letter] = count[letter] + 1;
    } else {
      count[letter] = 1;
    }
  }

  const countTuple = Object.entries(count);

  countTuple.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  const orderedLetters = countTuple
    .map(([first]) => first)
    .join("")
    .slice(0, 5);

  return orderedLetters === checksum ? true : false;
};

export const extractSectorId = (encryptedName: string): number =>
  Number(encryptedName.split("[")[0].split("-").at(-1));

export const getSectorIdSum = (input: string): number => {
  const encryptedNames = input.split("\n");
  const realRoomSectorIds = [];

  for (const name of encryptedNames) {
    if (isRealRoom(name)) {
      realRoomSectorIds.push(extractSectorId(name));
    }
  }

  return realRoomSectorIds.reduce((a, c) => a + c, 0);
};
