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

const ALPHABET_LENGTH = 26;
export const decryptName = (encryptedName: string): string => {
  const former = encryptedName.split("[")[0];
  const chunks = former.split("-");
  const sectorId = Number(chunks.pop());
  const cipherOffset = sectorId % ALPHABET_LENGTH;
  let decryptedName = "";

  for (const letter of chunks.join(" ")) {
    if (letter === " ") {
      decryptedName += " ";
      continue;
    }

    const code = letter.charCodeAt(0);
    const newCode = code + cipherOffset;
    if (newCode > 122) {
      decryptedName += String.fromCharCode(newCode - 26);
    } else {
      decryptedName += String.fromCharCode(newCode);
    }
  }

  return `${decryptedName} ${sectorId}`;
};

export const getNorthPoleRoomSectorId = (input: string): string => {
  const encryptedNames = input.split("\n");
  const realRoomEncryptedNames = [];
  const realRoomDecryptedNames = [];

  for (const name of encryptedNames) {
    if (isRealRoom(name)) {
      realRoomEncryptedNames.push(name);
    }
  }

  for (const name of realRoomEncryptedNames) {
    realRoomDecryptedNames.push(decryptName(name));
  }

  return realRoomDecryptedNames
    .filter((name) => name.startsWith("northpole object storage"))[0]
    .split(" ")
    .at(-1)!;
};
