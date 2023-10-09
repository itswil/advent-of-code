export const getItemPrioritySum = (input: string): number => {
  const getDuplicatedChar = (str1: string, str2: string) => {
    const str1Arr = str1.split("");
    const str2Arr = str2.split("");
    const duplicatedChar = str1Arr.filter((char) => str2Arr.includes(char));
    return new Set(duplicatedChar);
  };

  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const duplicates = [];

  for (const line of input.split("\n")) {
    const half1 = line.slice(0, line.length / 2);
    const half2 = line.slice(line.length / 2);

    duplicates.push(...getDuplicatedChar(half1, half2));
  }

  const sumPriorities = duplicates.reduce(
    (acc, char) => acc + alphabet.indexOf(char) + 1,
    0
  );

  return sumPriorities;
};

export const getItemPrioritySumForGroups = (input: string): number => {
  const getDuplicatedChar = (str1: string, str2: string, str3: string) => {
    const str1Arr = str1.split("");
    const str2Arr = str2.split("");
    const str3Arr = str3.split("");
    const duplicatedChar1 = str1Arr.filter((char) => str2Arr.includes(char));
    const duplicatedChar2 = str1Arr.filter((char) => str3Arr.includes(char));
    const duplicatedChar3 = str2Arr.filter((char) => str3Arr.includes(char));
    const commonChar = duplicatedChar1.filter(
      (char) => duplicatedChar2.includes(char) && duplicatedChar3.includes(char)
    );
    return new Set(commonChar);
  };

  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const duplicates = [];
  const batchOfThree = [];

  for (const line of input.split("\n")) {
    batchOfThree.push(line);

    if (batchOfThree.length === 3) {
      const [str1, str2, str3] = batchOfThree;
      const commonChar = getDuplicatedChar(str1, str2, str3);
      duplicates.push(...commonChar);
      batchOfThree.length = 0;
    }
  }

  const sumPriorities = duplicates.reduce(
    (acc, char) => acc + alphabet.indexOf(char) + 1,
    0
  );

  return sumPriorities;
};
