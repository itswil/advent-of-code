export function getMultipliedValueFromTwo(input: string) {
  const numArray: Array<number> = input.split("\n").map(Number);
  let answer = 0;

  numArray.forEach((num1, index1) => {
    numArray.forEach((num2, index2) => {
      if (index1 !== index2) {
        if (num1 + num2 === 2020) {
          answer = num1 * num2;
        }
      }
    });
  });

  return answer;
}

export function getMultipliedValueFromThree(input: string) {
  const numArray: Array<number> = input.split("\n").map(Number);
  let answer = 0;

  numArray.forEach((num1, index1) => {
    numArray.forEach((num2, index2) => {
      numArray.forEach((num3, index3) => {
        if (index1 !== index2 && index1 !== index3 && index2 !== index3) {
          if (num1 + num2 + num3 === 2020) {
            answer = num1 * num2 * num3;
          }
        }
      });
    });
  });

  return answer;
}
