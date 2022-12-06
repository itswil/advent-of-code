import { readFileSync } from "fs";
import { argv } from "process";

export const getLines = () => {
  const path = argv[1].split("/").slice(0, -1).join("/");
  const isTestInput = argv[2] === "--test" || argv[2] === "-t";
  let pathToInput = `${path}/input.txt`;

  if (isTestInput) {
    pathToInput = `${path}/testInput.txt`;
  }

  return readFileSync(pathToInput).toString();
};
