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

	const grid = input.split("\n").map((line) => line.split(""));

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			// North
			if (i - 3 >= 0) {
				if (
					stringCheck(
						grid[i][j],
						grid[i - 1][j],
						grid[i - 2][j],
						grid[i - 3][j],
					)
				)
					count++;
			}

			// North East
			if (i - 3 >= 0 && j + 3 < grid[0].length) {
				if (
					stringCheck(
						grid[i][j],
						grid[i - 1][j + 1],
						grid[i - 2][j + 2],
						grid[i - 3][j + 3],
					)
				)
					count++;
			}

			// East
			if (j + 3 < grid[0].length) {
				if (
					stringCheck(
						grid[i][j],
						grid[i][j + 1],
						grid[i][j + 2],
						grid[i][j + 3],
					)
				)
					count++;
			}

			// South East
			if (i + 3 < grid.length && j + 3 < grid[0].length) {
				if (
					stringCheck(
						grid[i][j],
						grid[i + 1][j + 1],
						grid[i + 2][j + 2],
						grid[i + 3][j + 3],
					)
				)
					count++;
			}

			// South
			if (i + 3 < grid.length) {
				if (
					stringCheck(
						grid[i][j],
						grid[i + 1][j],
						grid[i + 2][j],
						grid[i + 3][j],
					)
				)
					count++;
			}
			// South West
			if (i + 3 < grid.length && j - 3 >= 0) {
				if (
					stringCheck(
						grid[i][j],
						grid[i + 1][j - 1],
						grid[i + 2][j - 2],
						grid[i + 3][j - 3],
					)
				)
					count++;
			}

			// West
			if (j - 3 >= 0) {
				if (
					stringCheck(
						grid[i][j],
						grid[i][j - 1],
						grid[i][j - 2],
						grid[i][j - 3],
					)
				)
					count++;
			}

			// North West
			if (i - 3 >= 0 && j - 3 >= 0) {
				if (
					stringCheck(
						grid[i][j],
						grid[i - 1][j - 1],
						grid[i - 2][j - 2],
						grid[i - 3][j - 3],
					)
				)
					count++;
			}
		}
	}

	return count;
};

export const getNumberOfOccurences2 = (input: string): number => {
	let count = 0;

	const grid = input.split("\n").map((line) => line.split(""));

	for (let i = 1; i < grid.length - 1; i++) {
		for (let j = 1; j < grid[0].length - 1; j++) {
			if (grid[i][j] === "A") {
				if (
					((grid[i - 1][j - 1] === "M" && grid[i + 1][j + 1] === "S") ||
						(grid[i - 1][j - 1] === "S" && grid[i + 1][j + 1] === "M")) &&
					((grid[i - 1][j + 1] === "M" && grid[i + 1][j - 1] === "S") ||
						(grid[i - 1][j + 1] === "S" && grid[i + 1][j - 1] === "M"))
				) {
					count++;
				}
			}
		}
	}

	return count;
};
