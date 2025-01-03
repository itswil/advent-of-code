export const getSumOfDifferences = (input: string): number => {
	const listLeft = [];
	const listRight = [];
	for (const pair of input.split("\n")) {
		const [numLeft, numRight] = pair.split("   ");
		listLeft.push(Number.parseInt(numLeft));
		listRight.push(Number.parseInt(numRight));
	}
	listLeft.sort();
	listRight.sort();

	const differences = [];

	for (let i = 0; i < listLeft.length; i++) {
		differences.push(Math.abs(listLeft[i] - listRight[i]));
	}

	return differences.reduce((acc, curr) => acc + curr, 0);
};

export const getSumOfSimilarityScores = (input: string): number => {
	const listLeft = [];
	const listRight = [];
	for (const pair of input.split("\n")) {
		const [numLeft, numRight] = pair.split("   ");
		listLeft.push(Number.parseInt(numLeft));
		listRight.push(Number.parseInt(numRight));
	}

	const similarityScores = [];

	for (const num of listLeft) {
		similarityScores.push(num * listRight.filter((i) => num === i).length);
	}

	return similarityScores.reduce((acc, curr) => acc + curr, 0);
};
