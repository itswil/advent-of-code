const isHaltOp = (code: number) => code === 99;
const isAddOp = (code: number) => code === 1;
const isMultiplyOp = (code: number) => code === 2;
const isStoreOp = (code: number) => code === 3;
const isOutputOp = (code: number) => code === 4;
const isImmediateMode = (code: number) => code > 99;

export const getDiagnosticCode = (input: string, value = 1): number => {
  const ops = input.split(",").map(Number); // list of operations

  let i = 0; // pointer

  while (true) {
    let op = ops[i];
    let a = ops[i + 1];
    let b = ops[i + 2];
    let c = ops[i + 3];
    console.log(op, ops[i + 1], ops[i + 2], ops[i + 3]);

    if (isImmediateMode(op)) {
      const opStr = `${op}`.padStart(5, "0");
      const [aMode, bMode, cMode, ...opCode] = opStr.split("");

      op = parseInt(opCode.join(""));

      if (parseInt(aMode)) {
        c = i + 3;
      }
      if (parseInt(bMode)) {
        b = i + 2;
      }
      if (parseInt(cMode)) {
        a = i + 1;
      }
    }

    if (isHaltOp(op)) {
      // console.log("HALT");
      return value;
    } else if (isAddOp(op)) {
      // console.log(`ADD: ${ops[c]}`);
      ops[c] = ops[a] + ops[b];
      // console.log(`-> ${ops[c]}`);
      i = i + 4;
    } else if (isMultiplyOp(op)) {
      // console.log(`MULTIPLY: ${ops[c]}`);
      ops[c] = ops[a] * ops[b];
      // console.log(`-> ${ops[c]}`);
      i = i + 4;
    } else if (isStoreOp(op)) {
      // console.log(`STORE: ${ops[a]}`);
      ops[a] = value;
      // console.log(`-> ${ops[a]}`);
      i = i + 2;
    } else if (isOutputOp(op)) {
      // console.log(`OUTPUT: ${ops[a]}`);
      value = ops[a];
      // console.log(`-> ${ops[a]}`);
      i = i + 2;
    }
  }
};
