export const getMultiple = (input: string, x: number, y: number): number => {
  const layers = [];

  for (let i = 0; i < input.length; i = i + x * y) {
    layers.push(input.slice(i, i + x * y));
  }

  let fewestZeroLayer = layers[0];
  let numZeros = fewestZeroLayer.split("0").length - 1;

  for (const layer of layers) {
    const tempNumZeros = layer.split("0").length - 1;
    if (tempNumZeros < numZeros) {
      fewestZeroLayer = layer;
      numZeros = tempNumZeros;
    }
  }

  const numOnes = fewestZeroLayer.split("1").length - 1;
  const numTwos = fewestZeroLayer.split("2").length - 1;

  return numOnes * numTwos;
};

export const getDecodedImageMessage = (
  input: string,
  x: number,
  y: number
): void => {
  const layers = [];
  let visibleLayer = "";

  for (let i = 0; i < input.length; i = i + x * y) {
    layers.push(input.slice(i, i + x * y));
  }

  for (let i = 0; i < layers[0].length; i++) {
    for (let j = 0; j < layers.length; j++) {
      if (layers[j][i] === "0") {
        visibleLayer = visibleLayer + " ";
        break;
      } else if (layers[j][i] === "1") {
        visibleLayer = visibleLayer + "▇";
        break;
      }
    }
  }

  let visibleLayerArray = [];

  for (let i = 0; i < visibleLayer.length; i = i + x) {
    visibleLayerArray.push(visibleLayer.slice(i, i + x));
  }

  console.log(visibleLayerArray.join("\n"));
  // BCYEF is printed in the message
  // getDecodedImageMessage does not return any value
  // ▇▇▇   ▇▇  ▇   ▇▇▇▇▇ ▇▇▇▇
  // ▇  ▇ ▇  ▇ ▇   ▇▇    ▇
  // ▇▇▇  ▇     ▇ ▇ ▇▇▇  ▇▇▇
  // ▇  ▇ ▇      ▇  ▇    ▇
  // ▇  ▇ ▇  ▇   ▇  ▇    ▇
  // ▇▇▇   ▇▇    ▇  ▇▇▇▇ ▇
};
