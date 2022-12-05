import { readFileSync } from "fs";
import { argv } from "process";

export const getLines = () => {
  const path = argv[1].split("/").slice(0, -1).join("/");
  const isTestInput = argv[2] === "--test";

  if (isTestInput) {
    return readFileSync(`${path}/testInput.txt`).toString();
  }

  return readFileSync(`${path}/input.txt`).toString();
};
