export const getNumberOfValidPassports = (input: string): number => {
  let validPassports = 0;
  const stringArray = input.split("\n\n");

  stringArray.forEach((str) => {
    if (
      str.includes("byr:") &&
      str.includes("iyr:") &&
      str.includes("eyr:") &&
      str.includes("hgt:") &&
      str.includes("hcl:") &&
      str.includes("ecl:") &&
      str.includes("pid:")
    ) {
      validPassports++;
    }
  });

  return validPassports;
};

export const getNumberOfPassportsPassingValidation = (
  input: string
): number => {
  let validPassports = 0;
  const stringArray = input.split("\n\n");

  for (const str of stringArray) {
    const fields = str.replaceAll("\n", " ").split(" ");

    const byr = fields.find((field) => field.startsWith("byr:"))?.split(":")[1];
    if (!byr) continue;
    if (parseInt(byr) < 1920 || parseInt(byr) > 2002) {
      continue;
    }

    const iyr = fields.find((field) => field.startsWith("iyr:"))?.split(":")[1];
    if (!iyr) continue;
    if (parseInt(iyr) < 2010 || parseInt(iyr) > 2020) {
      continue;
    }

    const eyr = fields.find((field) => field.startsWith("eyr:"))?.split(":")[1];
    if (!eyr) continue;
    if (parseInt(eyr) < 2020 || parseInt(eyr) > 2030) {
      continue;
    }

    const hgt = fields.find((field) => field.startsWith("hgt:"))?.split(":")[1];
    if (!hgt) continue;
    if (!(hgt.endsWith("cm") || hgt.endsWith("in"))) continue;
    if (hgt.endsWith("cm")) {
      const height = parseInt(hgt.replace("cm", ""));
      if (height < 150 || height > 193) {
        continue;
      }
    } else if (hgt.endsWith("in")) {
      const height = parseInt(hgt.replace("in", ""));
      if (height < 59 || height > 76) {
        continue;
      }
    }

    const hcl = fields.find((field) => field.startsWith("hcl:"))?.split(":")[1];
    if (!hcl) continue;
    if (!hcl.startsWith("#")) continue;
    if (!hcl.match(/^#[0-9a-f]{6}/)) {
      continue;
    }

    const validEyeColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
    const ecl = fields.find((field) => field.startsWith("ecl:"))?.split(":")[1];
    if (!ecl) continue;
    if (!validEyeColors.includes(ecl)) continue;

    const pid = fields.find((field) => field.startsWith("pid:"))?.split(":")[1];
    if (!pid) continue;
    if (pid.length !== 9) continue;

    validPassports++;
  }

  return validPassports;
};
