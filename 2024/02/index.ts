type Direction = "asc" | "desc";

export const isSafeReport = (report: string) => {
	const levels = report.split(" ").map((n) => Number.parseInt(n));
	let isSafe = true;
	let direction: Direction;

	if (levels[1] > levels[0]) {
		direction = "asc";
	} else {
		direction = "desc";
	}

	for (let i = 0; i < levels.length - 1; i++) {
		const diff = levels[i + 1] - levels[i];

		if (direction === "asc") {
			if (!(diff >= 1 && diff <= 3)) {
				isSafe = false;
				break;
			}
		} else {
			if (!(diff >= -3 && diff <= -1)) {
				isSafe = false;
				break;
			}
		}
	}

	return isSafe;
};

export const getNumberOfSafeReports = (input: string): number => {
	const reports = input.split("\n");
	let safeReports = 0;

	for (const report of reports) {
		if (isSafeReport(report)) {
			safeReports++;
		}
	}

	return safeReports;
};

export const isSafeReportWithTolerance = (report: string) => {
	const levels = report.split(" ").map((n) => Number.parseInt(n));

	for (let i = 0; i < levels.length; i++) {
		const levelsTrimmed = [...levels.slice(0, i), ...levels.slice(i + 1)];

		if (isSafeReport(levelsTrimmed.join(" "))) {
			return true;
		}
	}

	return false;
};

export const getNumberOfSafeReportsWithTolerance = (input: string): number => {
	const reports = input.split("\n");
	let safeReports = 0;

	for (const report of reports) {
		if (isSafeReport(report) || isSafeReportWithTolerance(report)) {
			safeReports++;
		}
	}

	return safeReports;
};
