const getMultiplication = (str: string) => {
	const [n1, n2] = str.replaceAll("mul(", "").replaceAll(")", "").split(",");
	return Number.parseInt(n1) * Number.parseInt(n2);
};

export const getUncorruptedMulSum = (input: string): number => {
	let sum = 0;

	const matches = input.match(/mul\(\d+,\d+\)/g);

	for (const match of matches || []) {
		sum += getMultiplication(match);
	}

	return sum;
};

export const getUncorruptedMulSumWithDiasbling = (input: string): number => {
	let sum = 0;

	const matches = input.match(/mul\(\d+,\d+\)|don't\(\)|do\(\)/g);

	if (!matches) return 0;

	let mulSwitch = true;
	for (let i = 0; i < matches.length; i++) {
		if (matches[i] === "don't()") {
			mulSwitch = false;
			continue;
		}
		if (matches[i] === "do()") {
			mulSwitch = true;
			continue;
		}

		if (mulSwitch) {
			sum += getMultiplication(matches[i]);
		}
	}

	return sum;
};
