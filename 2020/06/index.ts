const getResponsesByGroups = (input: string): Array<Array<string>> => {
  const array = [[]];
  const groups = input.split("\n");

  for (const g of groups) {
    if (g === "") {
      array.push([]);
    } else {
      array[array.length - 1].push(g);
    }
  }

  return array;
};

export const getYesResponseSum = (input: string): number => {
  let sum = 0;
  let uniqueResponses = [];
  const responsesByGroups = getResponsesByGroups(input);

  for (const group of responsesByGroups) {
    uniqueResponses.push(
      new Set([...group.reduce((a, c) => a + c, "").split("")])
    );
  }

  for (const group of uniqueResponses) {
    sum += group.size;
  }

  return sum;
};

const getAllCommonResponses = (
  responsesByGroups: Array<Array<string>>
): Array<string> => {
  const array = [];

  for (const group of responsesByGroups) {
    const tempArray = [];
    if (group.length === 1) {
      array.push(group);
      continue;
    } else {
      group.sort((a, b) => a.length - b.length);

      for (const letter of group[0]) {
        let letterIsCommon = true;
        for (let i = 1; i < group.length; i++) {
          if (!group[i].includes(letter)) {
            letterIsCommon = false;
            continue;
          }
        }

        if (letterIsCommon) {
          tempArray.push(letter);
        }
      }
    }

    array.push(tempArray);
  }

  return array.map((a) => a.join(""));
};

export const getAllAgreedYesResponseSum = (input: string): number => {
  let sum = 0;
  const responsesByGroups = getResponsesByGroups(input);
  const commonResponses = getAllCommonResponses(responsesByGroups);

  for (const group of commonResponses) {
    if (!group) {
      continue;
    }
    sum += group.length;
  }

  return sum;
};
