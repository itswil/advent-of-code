const X_MAX = 1000;
const Y_MAX = 1000;
const DEFAULT_STATE = 0; // light off

const ACTION = {
  turnOn: "TURN_ON",
  turnOff: "TURN_OFF",
  toggle: "TOGGLE",
} as const;

type ParseCommandReturn = [
  (typeof ACTION)[keyof typeof ACTION],
  Array<number>,
  Array<number>
];

export const parseCommand = (command: string): ParseCommandReturn => {
  const split = command.split(" ");
  let action = "" as (typeof ACTION)[keyof typeof ACTION];

  if (split[0] === "toggle") {
    action = ACTION.toggle;
  } else if (split[1] === "on") {
    action = ACTION.turnOn;
  } else if (split[1] === "off") {
    action = ACTION.turnOff;
  }

  const from = split.at(-3)?.split(",")!;
  const to = split.at(-1)?.split(",")!;
  const xRange = [Number(from[0]), Number(to[0])];
  const yRange = [Number(from[1]), Number(to[1])];

  return [action, xRange, yRange];
};

const mutateLightsArray = (
  lights: Array<Array<number>>,
  action: (typeof ACTION)[keyof typeof ACTION],
  xRange: Array<number>,
  yRange: Array<number>
): void => {
  for (let i = xRange[0]; i <= xRange[1]; i++) {
    for (let j = yRange[0]; j <= yRange[1]; j++) {
      if (action === ACTION.turnOn) {
        lights[i][j] = 1;
      } else if (action === ACTION.turnOff) {
        lights[i][j] = 0;
      } else if (action === ACTION.toggle) {
        lights[i][j] = lights[i][j] === 0 ? 1 : 0;
      }
    }
  }
};

export const getLitLightsCount = (input: string): number => {
  const commands = input.split("\n");
  const lightArray = Array(X_MAX)
    .fill(DEFAULT_STATE)
    .map((value) => (value = Array(Y_MAX).fill(DEFAULT_STATE)));

  for (const command of commands) {
    const [action, xRange, yRange] = parseCommand(command);
    mutateLightsArray(lightArray, action, xRange, yRange);
  }

  return lightArray.flat().filter((value) => value === 1).length;
};

const mutateLightsArrayV2 = (
  lights: Array<Array<number>>,
  action: (typeof ACTION)[keyof typeof ACTION],
  xRange: Array<number>,
  yRange: Array<number>
): void => {
  for (let i = xRange[0]; i <= xRange[1]; i++) {
    for (let j = yRange[0]; j <= yRange[1]; j++) {
      if (action === ACTION.turnOn) {
        lights[i][j]++;
      } else if (action === ACTION.turnOff) {
        lights[i][j] = lights[i][j] === 0 ? 0 : lights[i][j] - 1;
      } else if (action === ACTION.toggle) {
        lights[i][j] += 2;
      }
    }
  }
};

export const getSumBrightness = (input: string): number => {
  const commands = input.split("\n");
  const lightArray = Array(X_MAX)
    .fill(DEFAULT_STATE)
    .map((value) => (value = Array(Y_MAX).fill(DEFAULT_STATE)));

  for (const command of commands) {
    const [action, xRange, yRange] = parseCommand(command);
    mutateLightsArrayV2(lightArray, action, xRange, yRange);
  }

  return lightArray.flat().reduce((a, c) => a + c, 0);
};
