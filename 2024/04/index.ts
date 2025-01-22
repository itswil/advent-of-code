type Char = string | undefined;
export const stringCheck = (c1: Char, c2: Char, c3: Char, c4: Char) => {
	if (!c1 || !c2 || !c3 || !c4) return false;

	if (c1 === "X" && c2 === "M" && c3 === "A" && c4 === "S") {
		return true;
	}

	return false;
};

export const getNumberOfOccurences = (input: string): number => {
	let count = 0;

	const inputArray = input.split("\n").map((line) => line.split(""));

	for (let i = 0; i < inputArray.length; i++) {
		for (let j = 0; j < inputArray[0].length; j++) {
			// North
			if (i - 3 >= 0) {
				if (
					stringCheck(
						inputArray[i][j],
						inputArray[i - 1][j],
						inputArray[i - 2][j],
						inputArray[i - 3][j],
					)
				)
					count++;
			}

			// North East
			if (i - 3 >= 0 && j + 3 < inputArray[0].length) {
				if (
					stringCheck(
						inputArray[i][j],
						inputArray[i - 1][j + 1],
						inputArray[i - 2][j + 2],
						inputArray[i - 3][j + 3],
					)
				)
					count++;
			}

			// East
			if (j + 3 < inputArray[0].length) {
				if (
					stringCheck(
						inputArray[i][j],
						inputArray[i][j + 1],
						inputArray[i][j + 2],
						inputArray[i][j + 3],
					)
				)
					count++;
			}

			// South East
			if (i + 3 < inputArray.length && j + 3 < inputArray[0].length) {
				if (
					stringCheck(
						inputArray[i][j],
						inputArray[i + 1][j + 1],
						inputArray[i + 2][j + 2],
						inputArray[i + 3][j + 3],
					)
				)
					count++;
			}

			// South
			if (i + 3 < inputArray.length) {
				if (
					stringCheck(
						inputArray[i][j],
						inputArray[i + 1][j],
						inputArray[i + 2][j],
						inputArray[i + 3][j],
					)
				)
					count++;
			}
			// South West
			if (i + 3 < inputArray.length && j - 3 >= 0) {
				if (
					stringCheck(
						inputArray[i][j],
						inputArray[i + 1][j - 1],
						inputArray[i + 2][j - 2],
						inputArray[i + 3][j - 3],
					)
				)
					count++;
			}

			// West
			if (j - 3 >= 0) {
				if (
					stringCheck(
						inputArray[i][j],
						inputArray[i][j - 1],
						inputArray[i][j - 2],
						inputArray[i][j - 3],
					)
				)
					count++;
			}

			// North West
			if (i - 3 >= 0 && j - 3 >= 0) {
				if (
					stringCheck(
						inputArray[i][j],
						inputArray[i - 1][j - 1],
						inputArray[i - 2][j - 2],
						inputArray[i - 3][j - 3],
					)
				)
					count++;
			}
		}
	}

	return count;
};
