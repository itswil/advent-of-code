export const getPassword = (prefix: string): string => {
  const md5 = new Bun.CryptoHasher("md5");
  let i = 0;
  let password = "";

  while (password.length < 8) {
    const hash = md5.update(`${prefix}${i}`).digest("hex");

    if (hash.startsWith("00000")) {
      password += hash.at(5);
    }

    i++;
  }

  return password;
};

export const getPasswordV2 = (prefix: string): string => {
  const md5 = new Bun.CryptoHasher("md5");
  let i = 0;
  let password = Array(8);

  while (password.filter(Boolean).length < 8) {
    const hash = md5.update(`${prefix}${i}`).digest("hex");
    const position = Number(hash.at(5));

    if (
      hash.startsWith("00000") &&
      position < 8 &&
      password[position] === undefined
    ) {
      password[position] = hash.at(6);
    }

    i++;
  }

  return password.join("");
};
