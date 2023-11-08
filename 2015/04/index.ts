export const getSuffix = (prefix: string): number => {
  const md5 = new Bun.CryptoHasher("md5");
  let i = 0;

  while (true) {
    const hash = md5.update(`${prefix}${i}`).digest("hex");

    if (hash.startsWith("00000")) {
      return i;
    }

    i++;
  }
};

export const getSuffixV2 = (prefix: string): number => {
  const md5 = new Bun.CryptoHasher("md5");
  let i = 0;

  while (true) {
    const hash = md5.update(`${prefix}${i}`).digest("hex");

    if (hash.startsWith("000000")) {
      return i;
    }

    i++;
  }
};
